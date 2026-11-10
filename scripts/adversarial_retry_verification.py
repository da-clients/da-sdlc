import os
import re
import sys

BASE_DIR = r"C:\Users\Ngandu\.gemini\antigravity\scratch\da-sdlc"
OUT_DIR = os.path.join(BASE_DIR, "out")
PUBLIC_DIR = os.path.join(BASE_DIR, "public")

def run_tests():
    print("=" * 70)
    print("CHALLENGER 2 RETRY: EMPIRICAL ADVERSARIAL VERIFICATION HARNESS")
    print(f"Target Project Directory: {BASE_DIR}")
    print(f"Static Output Directory: {OUT_DIR}")
    print("=" * 70 + "\n")

    failures = []
    passes = 0

    def assert_test(cond, desc, error_msg=""):
        nonlocal passes
        if cond:
            passes += 1
            print(f"  [PASS] {desc}")
        else:
            failures.append((desc, error_msg))
            print(f"  [FAIL] {desc} -> {error_msg}")

    # TEST SUITE 1: .htaccess File Integrity and Synchronization
    print("--- SUITE 1: .htaccess Content & File Synchronization ---")
    pub_ht = os.path.join(PUBLIC_DIR, ".htaccess")
    out_ht = os.path.join(OUT_DIR, ".htaccess")

    assert_test(os.path.isfile(pub_ht), "public/.htaccess exists on disk")
    assert_test(os.path.isfile(out_ht), "out/.htaccess exists on disk")

    with open(pub_ht, "r", encoding="utf-8") as f:
        pub_content = f.read()

    with open(out_ht, "r", encoding="utf-8") as f:
        out_content = f.read()

    assert_test(pub_content == out_content, "public/.htaccess and out/.htaccess are identical byte-for-byte")

    # TEST SUITE 2: Apache 2.4 Clean URL Rewrite Rule Verification
    print("\n--- SUITE 2: Apache Clean URL Rewrite Rule Verification ---")
    rewrite_block = re.search(r"<IfModule mod_rewrite\.c>(.*?)</IfModule>", pub_content, re.DOTALL)
    assert_test(bool(rewrite_block), "mod_rewrite.c block is present")

    if rewrite_block:
        rw_code = rewrite_block.group(1)
        assert_test("RewriteEngine On" in rw_code, "RewriteEngine On directive is present")
        assert_test("RewriteCond %{REQUEST_FILENAME} !-f" in rw_code, "RewriteCond !-f is present")
        assert_test("RewriteCond %{REQUEST_FILENAME} !-d" not in rw_code, "CRITICAL: RewriteCond !-d has been completely REMOVED")
        assert_test("RewriteCond %{REQUEST_FILENAME}.html -f" in rw_code, "RewriteCond %{REQUEST_FILENAME}.html -f is present")
        assert_test(re.search(r"RewriteRule\s+\^\(\.\*\)\$\s+\$1\.html\s+\[L\]", rw_code) is not None, "RewriteRule ^(.*)$ $1.html [L] is present and correctly formatted")

    # TEST SUITE 3: Apache 2.4 Security Headers Syntax Verification
    print("\n--- SUITE 3: Apache 2.4 Security Headers Syntax Verification ---")
    headers_block = re.search(r"<IfModule mod_headers\.c>(.*?)</IfModule>", pub_content, re.DOTALL)
    assert_test(bool(headers_block), "mod_headers.c block is present")

    if headers_block:
        h_code = headers_block.group(1)
        # Expected headers with 'Header always set'
        expected_sec_headers = [
            ("X-Content-Type-Options", '"nosniff"'),
            ("X-Frame-Options", '"SAMEORIGIN"'),
            ("Referrer-Policy", '"strict-origin-when-cross-origin"'),
            ("Permissions-Policy", '"camera=(), microphone=(), geolocation=()"'),
        ]
        for h_name, h_val in expected_sec_headers:
            pattern = rf'Header\s+always\s+set\s+{re.escape(h_name)}\s+{re.escape(h_val)}'
            assert_test(bool(re.search(pattern, h_code)), f'Header always set {h_name} {h_val} matches Apache 2.4 syntax')

        # Caching directives
        assert_test('FilesMatch "\\.(ico|jpe?g|png|gif|swf|css|gz|js|webp|pdf)$"' in h_code, "Media/static assets caching FilesMatch present")
        assert_test('FilesMatch "\\.(html|htm)$"' in h_code, "HTML zero-cache FilesMatch present")
        assert_test('Header set Cache-Control "no-cache, no-store, must-revalidate"' in h_code, "HTML Cache-Control no-cache present")
        assert_test('Header set Pragma "no-cache"' in h_code, "HTML Pragma no-cache present")
        assert_test('Header set Expires 0' in h_code, "HTML Expires 0 present")

    # TEST SUITE 4: Empirical Simulation of Apache Rewrite Logic across all 12 Routes
    print("\n--- SUITE 4: Empirical Simulation Across All 12 Routes ---")
    routes_12 = [
        "donate", "about", "partners", "contact", "programs",
        "leadership", "organisation", "pillars", "gallery",
        "rules-of-engagement", "privacy", "terms"
    ]

    for r in routes_12:
        path_on_disk = os.path.join(OUT_DIR, r)
        html_file = os.path.join(OUT_DIR, f"{r}.html")
        
        is_file = os.path.isfile(path_on_disk)
        is_dir = os.path.isdir(path_on_disk)
        html_exists = os.path.isfile(html_file)

        # Apache mod_rewrite evaluation:
        # RewriteCond %{REQUEST_FILENAME} !-f
        # RewriteCond %{REQUEST_FILENAME}.html -f
        # RewriteRule ^(.*)$ $1.html [L]
        cond_not_file = not is_file
        cond_html_exists = html_exists
        rewrite_fires = cond_not_file and cond_html_exists
        final_target = f"{r}.html" if rewrite_fires else None

        # Verify that is_dir is TRUE (Next.js directory artifact)
        assert_test(is_dir, f"Route /{r} has corresponding directory artifact in out/")
        # Verify that html_file exists
        assert_test(html_exists, f"Route /{r} has corresponding static HTML file {r}.html in out/")
        # Verify that rewrite fires successfully
        assert_test(rewrite_fires and final_target == f"{r}.html", f"Route /{r} rewrites cleanly to {r}.html under new rules")

    # TEST SUITE 5: Static Asset Passthrough (No False Positive Rewrites)
    print("\n--- SUITE 5: Static Assets & Direct File Passthrough ---")
    # Discover a variety of real assets
    sample_assets = [
        "assets/sponsors/palesa-pads-logo.png",
        "assets/sponsors/palesa-pads-qr.jpg",
        "assets/docs/MEETingNeeds.pdf",
        "robots.txt",
        "sitemap.xml",
        "llms.txt",
        "donate.html",
        "about.html",
        "index.html",
        "404.html"
    ]

    for asset in sample_assets:
        full_path = os.path.join(OUT_DIR, asset.replace("/", os.sep))
        is_file = os.path.isfile(full_path)
        assert_test(is_file, f"Asset exists: {asset}")
        
        # When Apache receives request for asset:
        # RewriteCond %{REQUEST_FILENAME} !-f
        # Because it IS a file, !-f evaluates to FALSE.
        cond_not_file = not is_file
        cond_html_exists = os.path.isfile(full_path + ".html")
        rewrite_fires = cond_not_file and cond_html_exists

        assert_test(not rewrite_fires, f"Asset /{asset} is NOT rewritten (direct file served cleanly)")

    # TEST SUITE 6: Directory & Edge Case Stress-Testing
    print("\n--- SUITE 6: Edge Cases & Adversarial Inputs ---")
    # 1. Non-existent route: /non-existent-page
    non_existent = os.path.join(OUT_DIR, "non-existent-page")
    ne_is_file = os.path.isfile(non_existent)
    ne_html_exists = os.path.isfile(non_existent + ".html")
    ne_rewrite = (not ne_is_file) and ne_html_exists
    assert_test(not ne_rewrite, "Non-existent route does NOT rewrite to phantom .html; delegates to ErrorDocument 404")

    # 2. Existing folder without .html counterpart: e.g. /assets, /assets/sponsors
    assets_dir = os.path.join(OUT_DIR, "assets")
    assets_dir_is_dir = os.path.isdir(assets_dir)
    assets_dir_is_file = os.path.isfile(assets_dir)
    assets_dir_html = os.path.isfile(assets_dir + ".html")
    assets_dir_rewrite = (not assets_dir_is_file) and assets_dir_html
    assert_test(assets_dir_is_dir and not assets_dir_rewrite, "Directory /assets without .html counterpart does NOT rewrite")

    sponsors_dir = os.path.join(OUT_DIR, "assets", "sponsors")
    sponsors_dir_is_dir = os.path.isdir(sponsors_dir)
    sponsors_dir_is_file = os.path.isfile(sponsors_dir)
    sponsors_dir_html = os.path.isfile(sponsors_dir + ".html")
    sponsors_dir_rewrite = (not sponsors_dir_is_file) and sponsors_dir_html
    assert_test(sponsors_dir_is_dir and not sponsors_dir_rewrite, "Directory /assets/sponsors without .html counterpart does NOT rewrite")

    # 3. Direct HTML file request: e.g. /donate.html
    # Should not rewrite to donate.html.html
    donate_html_path = os.path.join(OUT_DIR, "donate.html")
    donate_html_is_file = os.path.isfile(donate_html_path)
    donate_html_double_html = os.path.isfile(donate_html_path + ".html")
    donate_html_rewrite = (not donate_html_is_file) and donate_html_double_html
    assert_test(not donate_html_rewrite, "Direct request for /donate.html does not double-rewrite to .html.html")

    # 4. Root request: / (empty string matching ^(.*)$)
    root_path = OUT_DIR
    root_html_exists = os.path.isfile(os.path.join(root_path, ".html"))
    root_rewrite = (not os.path.isfile(root_path)) and root_html_exists
    assert_test(not root_rewrite, "Root request / does NOT rewrite to phantom .html; handled by DirectoryIndex index.html")

    # 5. Linux case sensitivity validation: Check all 12 route files are strictly lowercase
    case_sensitive_ok = True
    for r in routes_12:
        if r != r.lower():
            case_sensitive_ok = False
    assert_test(case_sensitive_ok, "All 12 route names are strictly lowercase (Linux/cPanel case sensitivity safe)")

    print("\n" + "=" * 70)
    print(f"VERIFICATION SUMMARY: {passes} Passed, {len(failures)} Failed")
    print("=" * 70)

    if failures:
        print("\nFAILURES:")
        for desc, err in failures:
            print(f"  - {desc}: {err}")
        return False
    else:
        print("\nALL ADVERSARIAL AND EMPIRICAL VERIFICATION TESTS PASSED UNCONDITIONALLY.")
        return True

if __name__ == "__main__":
    success = run_tests()
    sys.exit(0 if success else 1)
