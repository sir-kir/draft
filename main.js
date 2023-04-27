var tags = [];
tags.push({desc: "#Взаимодействие с госорганами", link: "https://www.google.com/"})
tags.push({desc: "#Мобилизация", link: "https://www.google.com/"})
tags.push({desc: "#Cрочная служба", link: "https://www.google.com/"})
tags.push({desc: "#Изменения в законодательстве", link: "https://www.google.com/"})
tags.push({desc: "#Правовые новости", link: "https://www.google.com/"})
tags.push({desc: "#Федеральные законы", link: "https://www.google.com/"})
tags.push({desc: "#Законопроекты", link: "https://www.google.com/"})
tags.push({desc: "#АГС", link: "https://www.google.com/"})
tags.push({desc: "#Законы", link: "https://www.google.com/"})
tags.push({desc: "#Конституция", link: "https://www.google.com/"})
tags.push({desc: "#Ходатайства", link: "https://www.google.com/"})
tags.push({desc: "#Жалобы", link: "https://www.google.com/"})
tags.push({desc: "#Доверенности", link: "https://www.google.com/"})
tags.push({desc: "#Иммиграция", link: "https://www.google.com/"})
tags.push({desc: "#Релокация", link: "https://www.google.com/"})
tags.push({desc: "#ВНЖ", link: "https://www.google.com/"})
tags.push({desc: "#Гражданство", link: "https://www.google.com/"})
tags.push({desc: "#Демократия", link: "https://www.google.com/"})
tags.push({desc: "#Психологическая помощь", link: "https://www.google.com/"})
tags.push({desc: "#Государство", link: "https://www.google.com/"})
tags.push({desc: "#Право", link: "https://www.google.com/"})
tags.push({desc: "#Нормы", link: "https://www.google.com/"})
tags.push({desc: "#Воинский учет", link: "https://www.google.com/"})
// сюда будешшь добавлять тэги если понадобится, просто по аналогии с имеющимися


// эта штука все отрисовывает и дает прозрачность последним трем элементам как в макете
// её не трогай ! :)
var container = document.querySelector("#tags");
for (let i = 0; i < tags.length; i++) {
    if (i == tags.length - 3) {
        container.innerHTML += `<a class="op4" href="`+ tags[i].link +`">`+ tags[i].desc +`</a> `
    }
    else if (i == tags.length - 2) {
        container.innerHTML += `<a class="op3" href="`+ tags[i].link +`">`+ tags[i].desc +`</a> `
    }
    else if (i == tags.length - 1) {
        container.innerHTML += `<a class="op1" href="`+ tags[i].link +`">`+ tags[i].desc +`</a> `
    }
    else{
        container.innerHTML += `<a href="`+ tags[i].link +`">`+ tags[i].desc +`</a> `
    }
     
};