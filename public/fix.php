<?php
// Digital Architect 1-Click cPanel Permission Fixer (0755 folders / 0644 files)
$it = new RecursiveIteratorIterator(new RecursiveDirectoryIterator(__DIR__, RecursiveDirectoryIterator::SKIP_DOTS), RecursiveIteratorIterator::SELF_FIRST);
foreach ($it as $item) {
    chmod($item->getPathname(), $item->isDir() ? 0755 : 0644);
}
chmod(__DIR__, 0755);
echo "SUCCESS: All folders set to 0755 and files set to 0644.";
?>
