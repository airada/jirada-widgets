function createElement(tagname, classList) {
    const element = document.createElement(tagname);
    element.classList.add(...classList);
    return element;
}

function createWidgetElement(img_src, alt_text, url) {
    const container = createElement("a", ["col-12","col-md-6","col-lg-3","col-xl-4", "my-1", "my-md-2", "my-lg-3", "rounded-3"]);
    const widget = createElement("div", ["card", "rounded-4"]);
    const widget_img = createElement("img", ["card-img-top","rounded-4"]);

    widget_img.src = img_src;
    widget_img.alt = alt_text
    container.href = url;

    widget.appendChild(widget_img);
    container.appendChild(widget);
    return container;
}

const widget_group = document.getElementById("widgets");

let widget_daily_quote = createWidgetElement("assets/img/jirada-daily-quote.jpg", "Daily Quotation widget with iOS Banner notification interface.", "https://jasmineirada.com/jirada-daily-quote/");
widget_group.appendChild(widget_daily_quote);


