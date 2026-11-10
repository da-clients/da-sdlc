import re
import os
import xml.etree.ElementTree as ET

BASE_DIR = r"C:\Users\Ngandu\.gemini\antigravity\scratch\da-sdlc"

def audit_page_section6():
    page_path = os.path.join(BASE_DIR, "src", "app", "page.tsx")
    with open(page_path, "r", encoding="utf-8") as f:
        content = f.read()

    s6_match = re.search(r'(<section className="py-6 sm:py-10.*?Want to See What Our Partners Offer.*?<\/section>)', content, re.DOTALL)
    if not s6_match:
        return {"error": "Section 6 not found in page.tsx"}

    s6 = s6_match.group(1)
    classes = re.findall(r'className="([^"]+)"', s6)
    
    return {
        "section_raw": s6,
        "classes": classes,
        "has_palesa_logo": "/assets/sponsors/palesa-pads-logo.png" in s6,
        "has_palesa_copy": "Palesa" in s6 or "sanitary" in s6.lower(),
        "has_snapscan": "snapscan" in s6.lower(),
        "has_partners_cta": 'href="/partners"' in s6,
    }

def audit_donate_palesa():
    donate_path = os.path.join(BASE_DIR, "src", "app", "donate", "page.tsx")
    with open(donate_path, "r", encoding="utf-8") as f:
        content = f.read()

    p_match = re.search(r'(<section id="palesa-pads".*?<\/section>)', content, re.DOTALL)
    if not p_match:
        return {"error": "Palesa section not found in donate/page.tsx"}

    p = p_match.group(1)
    classes = re.findall(r'className="([^"]+)"', p)
    
    return {
        "section_raw": p,
        "classes": classes,
        "has_palesa_logo": "/assets/sponsors/palesa-pads-logo.png" in p,
        "has_snapscan_link": "https://pos.snapscan.io/qr/Kwc3UjHr" in p,
        "has_partner_link": 'href="/partners"' in p,
        "has_contact_link": 'href="/contact"' in p,
        "has_verbatim_copy": "guarantee of 5 years — because her period shouldn't hold her back" in p.replace("&apos;", "'"),
        "has_responsive_grid": "grid-cols-1 lg:grid-cols-12" in p,
        "has_responsive_cards": "grid-cols-1 sm:grid-cols-2" in p,
        "has_flex_wrap_actions": "flex flex-wrap" in p,
    }

def audit_sitemap():
    sitemap_path = os.path.join(BASE_DIR, "public", "sitemap.xml")
    tree = ET.parse(sitemap_path)
    root = tree.getroot()
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    urls = []
    for u in root.findall("sm:url", ns):
        loc = u.find("sm:loc", ns).text
        prio = u.find("sm:priority", ns).text
        urls.append({"loc": loc, "priority": prio})
    return urls

def simulate_apache_rewrite():
    out_dir = os.path.join(BASE_DIR, "out")
    routes = [
        "donate", "about", "partners", "contact", "programs",
        "leadership", "organisation", "pillars", "gallery",
        "rules-of-engagement", "privacy", "terms"
    ]
    assets = [
        "assets/sponsors/palesa-pads-logo.png",
        "assets/hero/hero-bg.jpg"
    ]
    
    results = []
    for r in routes:
        path_on_disk = os.path.join(out_dir, r)
        html_file = os.path.join(out_dir, f"{r}.html")
        is_file = os.path.isfile(path_on_disk)
        is_dir = os.path.isdir(path_on_disk)
        html_exists = os.path.isfile(html_file)
        
        # Test current .htaccess condition: !-f AND !-d AND .html -f
        current_pass = (not is_file) and (not is_dir) and html_exists
        
        # Test proposed fix: !-f AND .html -f
        fixed_pass = (not is_file) and html_exists
        
        results.append({
            "route": f"/{r}",
            "is_file": is_file,
            "is_dir": is_dir,
            "html_exists": html_exists,
            "current_pass": current_pass,
            "fixed_pass": fixed_pass
        })
        
    return results

if __name__ == "__main__":
    print("PAGE SECTION 6:", audit_page_section6())
    print("\nDONATE PALESA SECTION:", audit_donate_palesa())
    print("\nSITEMAP URLS:", len(audit_sitemap()))
    print("\nAPACHE REWRITE RESULTS:")
    for res in simulate_apache_rewrite():
        print(res)
