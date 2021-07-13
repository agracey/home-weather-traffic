
const reloadCams = () => {
  Array.prototype.slice.call(document.getElementsByTagName("img")).forEach((ele) => {
    if (!ele.dataset.base) return
    ele.src = ele.dataset.base + "?rand=" + new Date().getTime()
  })
}
setInterval(reloadCams, 60000);
reloadCams();

function htmlToElem(html) {
  let temp = document.createElement("template");
  html = html.trim(); // Never return a space text node as a result
  temp.innerHTML = html;
  return temp.content.firstChild;
}

const readNews = () => {
  fetch("/news")
    .then((res) => res.json())
    .then((list) => {

      const body = list.map((art)=>{
        return `
          <div class="clear ">
            <header>${art.title}</header>
            <section>${art.description}</section>
          </div>
        `
      }).join("")
      document.getElementsByClassName("news")[0].replaceWith(htmlToElem(`<div class=news>${body}</div>`));
    })
};

readNews();
setInterval(readNews, 1200000);


const readEvents = () => {
  fetch("/events")
    .then((res) => res.json())
    .then((data) => {

      const body = data.map((e)=>{
        return `
          <div class="clear ">
          <header>${e.name} -- ${e.timestamp}</header>
          <section>${JSON.parse(e.event)}</section>
          </div>`
      }).join("")

      document.getElementsByClassName("events")[0].replaceWith(htmlToElem(`<div class=events>${body}</div>`));
    });
};

readEvents();
setInterval(readEvents, 5000);
