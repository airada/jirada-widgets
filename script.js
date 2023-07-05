function createElement(tagname, classList) {
    const element = document.createElement(tagname);
    element.classList.add(...classList);
    return element;
}

function createWidgetElement(img_src) {
    const container = createElement("a", ["col-12","col-md-6","col-lg-3","col-xl-4", "my-1", "my-md-2", "my-lg-3", "rounded-3"]);
    const widget = createElement("div", ["card"]);
    const widget_img = createElement("img", ["card-img-top"]);

    //TO-DO: Update alt text and href to actual widget information.
    widget_img.src = img_src;
    // widget_img.alt = "My cute dog named Inu."
    // container.href = "https://jasmineirada.com/";

    widget.appendChild(widget_img);
    container.appendChild(widget);
    return container;
}

//TO-DO: Replace img_src paths with widget images.
// let img_src = "assets/img/inu.png";

const widget_group = document.getElementById("widgets");

// let widget = createWidgetElement(img_src);
// widget_group.appendChild(widget);


