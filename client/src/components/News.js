import React from "react";

function Headline({title, description}) {
  return (
    <div className="Headline">
      <header> {title}
      </header>
      <section>
        {description}
      </section>
    </div>
  )
}

function News({headlines}) {
  return (
    <div className="NewsHeadlines">
      {headlines.map((hl)=>(<Headline {...hl} />))}
    </div>
  )
}

export default News;
