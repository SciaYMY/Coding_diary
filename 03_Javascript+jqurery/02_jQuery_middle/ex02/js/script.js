const tab = $('#tab > li');
const content = $('.content > div');

tab.on('click', function(e){
    // e.preventDefault();     //javascript: 대신
    let tg = $(this);
    let tc = tg.find('a');
    tab.find('a').removeClass('on');
    tc.addClass('on');

    let i =tg.index();
    // console.log(i);
    content.css('display', 'none');
    content.eq(i).css('display', 'block');
});

const el = $('.content>div>img');
let urls = ['https://www.google.com/search?q=%EC%A0%9C%EB%B9%84%EA%BD%83&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiR66iV8sjzAhXBA4gKHex7Ds4Q_AUoAXoECAEQAw&biw=933&bih=927&dpr=1',
    'https://www.google.com/search?q=%EC%9E%A5%EB%AF%B8&tbm=isch&ved=2ahUKEwje-4qX8sjzAhUU8WEKHY-HD6sQ2-cCegQIABAA&oq=%EC%9E%A5%EB%AF%B8&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyBQgAEIAEMggIABCABBCxAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgARQnEpY-Uxg4E5oAHAAeACAAWWIAbUDkgEDNC4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=3ppnYd6UM5TihwOPj77YCg&bih=927&biw=933',
    'https://www.google.com/search?q=%EB%82%98%ED%8C%94%EA%BD%83&tbm=isch&ved=2ahUKEwj8ybmc8sjzAhXlS_UHHRQACzoQ2-cCegQIABAA&oq=%EB%82%98%ED%8C%94%EA%BD%83&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6CAgAEIAEELEDUJBXWLFeYPtoaAFwAHgBgAF-iAGHBpIBAzUuM5gBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=6ppnYfysBeWX1e8PlICs0AM&bih=927&biw=933',
    'https://www.google.com/search?q=%EB%AF%BC%EB%93%A4%EB%A0%88&tbm=isch&ved=2ahUKEwjpyq2j8sjzAhVP8WEKHVo4DUgQ2-cCegQIABAA&oq=%EB%AF%BC%EB%93%A4%EB%A0%88&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6CwgAEIAEELEDEIMBUKtBWPVHYK5SaABwAHgAgAFsiAH1BZIBAzUuM5gBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=-JpnYenuIs_ihwPa8LTABA&bih=927&biw=933'
];

el.on({mouseover: function(){
    let tg=$(this);
    tg.addClass('on');
}, mouseout: function(){
    let tg=$(this);
    tg.removeClass('on');
}, click: function(){
    let tg=$(this);
    let i = tg.parent().index();
    let linkURL = urls[i];
    // location.href = linkURL;
    window.open(linkURL);   //새창에서 열림 
}})
