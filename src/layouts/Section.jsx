const Section = ({ children }) => {
  return (
    <div className="section_container">
      <div className="section_layout_container">
        <div className="section_layout">{children}</div>
      </div>
    </div>
  )
}

export { Section }
