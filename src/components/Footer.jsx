function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <p className="footer-text">© {year} Jannu Vishnu Vamsi. Built with React.</p>
    </footer>
  )
}

export default Footer
