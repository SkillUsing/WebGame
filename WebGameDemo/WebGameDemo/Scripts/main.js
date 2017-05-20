//pixi教程
var Container = PIXI.Container,//容器
    autoDetectRenderer = PIXI.autoDetectRenderer,//渲染器
    loader = PIXI.loader,//加载器
    resources = PIXI.loader.resources,//加载器资源文件
    Sprite = PIXI.Sprite;//精灵

//概述
//PIxi创建一个渲染器renderer对象
//它自动生成一个HTML <canvas>元素，并计算出如何在画布上显示图像
//然后需要创建一个叫stage的Container对象

var renderer = autoDetectRenderer(256, 256,
    {
        antialias: true,//反锯齿
        transparent: false,//是否透明
        autoResize: false//自适应-基本没效果
    });
//设置renderer(渲染器)对象的大小和浏览器窗体大小同步
renderer.resize(window.innerWidth, window.innerHeight);
//将renderer(渲染器)对象添加到网页上
document.body.appendChild(renderer.view);
//浏览器窗体大小被改变时同时修改renderer(渲染器)的大小
window.addEventListener("resize", function (event) {
    renderer.resize(window.innerWidth, window.innerHeight);
});



//Pixi Sprites(精灵)


//概述
//stage 是PIXI的Container(容器)对象,可以将容器看作空盒子,可以存储放入任何物品
var stage = new Container();//这个名为stage的对象将是PIXI要显示的所有东西的根容器
//PiXi要求具有一个根容器对象,因为渲染器需要渲染
renderer.render(stage);
//放入stage的任何东西都会在画面上呈现



//Pixi SpriteClass 将图像加载到纹理缓存中

//概述：
//由于Pixi使用WebGL在GPU上呈现图像,所以图像需要采用GPU才能处理的格式.
//WebGL准备好的图像称为texture(纹理).
//在使精灵显示图像之前，需要将普通图像文件转换为WebGL纹理。
//为了使所有工作都能在快速高效的基础上，Pixi使用纹理缓存来存储和引用所需要的所有纹理.
//纹理的名称是与他们引用的图像的文件位置相匹配的字符串

/*
//在纹理缓存中找到对应文件
var testCat = PIXI.utils.TextureCache["images/cat.png"];
//使用Pixi的Sprite类来创建一个使用texture(纹理)的新sprite,这样就可以直接使用
var sprite = new PIXI.Sprite(texture);
*/

//将图片文件转换成texture(纹理)
//通过loader
loader
    .add("images/explorer.png")
    .add("explorer", "images/explorer.png")
    .load(setup)
    .on("progress", loadProgressHandler);//监控Loader 加载进度

function loadProgressHandler(loader, resource) {
    console.log("文件: " + resource.url + "-----" + "进度:" + loader.progress + "%");
    //resource.error 尝试加载文件时发生的任何可能的错误
    //resource.data 文件的原始二进制数据
}



function setup() {
    //显示精灵
    //如果您使用loader，则应通过引用loader资源对象中的纹理来创建精灵


    var explorer = new Sprite(
        resources["images/explorer.png"].texture
    );
    var test = new Sprite(resources.explorer.texture);

    //定位精灵
    test.x = 64;
    test.y = 64;
    //改变大小
    //test.width = 100;
    //test.height = 100;
    //设置比例
    test.scale.set(2, 2);
    //设置比例2
    //test.scale.x = 2;
    //test.scale.y = 2;


    //旋转精灵
    test.rotation = 0.5;//直接旋转会以图片的左上角为锚点
    //让锚点居中
    test.anchor.x = 0.5;
    test.anchor.y = 0.5;

    stage.addChild(test);
    stage.addChild(explorer);//将sprite加入根容器对象中


    renderer.render(stage);//将容器渲染出来

    //stage.removeChild(explorer);//删除
    //renderer.render(stage);//删除之后得重新渲染一次
    //explorer.visible = false;//不可见
    //renderer.render(stage);//还是得渲染一次

    window.setTimeout(() => {
        test.position.set(100, 100);
        //renderer.render(stage);
        console.log("yes");
        //renderer.render(stage);
        return false;
    }, 3000);
}





