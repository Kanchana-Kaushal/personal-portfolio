function Footer() {
  return (
    <footer className="mt-14 pb-8" aria-label="Site footer">
      <hr className="text-gray-600" aria-hidden="true" />
      <p className="mx-auto mt-4 text-center text-xs text-gray-600 dark:text-gray-300">
        &copy; {new Date().getFullYear()} Kanchana K. Bandara
      </p>
    </footer>
  );
}

export default Footer;
