function createElement(tagname, classList) {
    const element = document.createElement(tagname);
    element.classList.add(...classList);
    return element;
}

function createWidgetElement(title, img_src, alt_text, url) {
    const container = createElement("a", ["col-12","col-md-6","col-lg-3","col-xl-4", "my-1", "my-md-2", "my-lg-3", "rounded-3"]);
    const widget = createElement("div", ["card", "rounded-4"]);
    const widget_img = createElement("img", ["card-img-top","rounded-4"]);
    const widget_body = createElement("div", ["card-body","border-top","rounded-bottom"]);
    const widget_body_title = createElement("h5", ["card-title", "text-center"]);
    
    widget_body_title.textContent = title;
    widget_img.src = img_src;
    widget_img.alt = alt_text
    container.href = url;


    widget_body.appendChild(widget_body_title);
    widget.appendChild(widget_img);
    widget.appendChild(widget_body);
    container.appendChild(widget);
    return container;
}

const widget_group = document.getElementById("widgets");

let widget_daily_quote = createWidgetElement("Daily Quotations Widget","assets/img/jirada-daily-quote.jpg", "Daily Quotation widget with iOS Banner notification interface.", "https://jasmineirada.com/jirada-daily-quote/");
widget_group.appendChild(widget_daily_quote);


