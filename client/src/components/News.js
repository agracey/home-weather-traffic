import React from "react";

function Headline({header, text}) {
  return (
    <div className="Headline">
      <header> {header}
      </header>
      <section>
        {text}
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
