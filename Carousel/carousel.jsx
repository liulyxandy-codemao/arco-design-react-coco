import { Carousel } from '@arco-design/web-react'
import loadBaseCSS from '../common/loadBaseCSS.js'

const types = {
    type: 'ARCO_CAROUSEL_WIDGET',
    icon: 'https://unpkg.byted-static.com/latest/byted/arco-config/assets/favicon.ico',
    title: 'Arco 图片轮播',
    version: '2.0.0',
    isInvisibleWidget: false,
    isGlobalWidget: false,
    properties: [
        {
            key: '__width',
            label: '宽度',
            valueType: 'number',
            defaultValue: 72,
        },
        {
            key: '__height',
            label: '高度',
            valueType: 'number',
            defaultValue: 32,
        },
        {
            key: 'images',
            label: '图片列表',
            valueType: 'string',
            defaultValue: 'https://creation.codemao.cn/716/appcraft/IMAGE_9r5q_5aCBS_1640252560978.png,https://creation.codemao.cn/716/appcraft/IMAGE_xkwMsmKiB0_1640252550877.png',
            editorType: 'TextArea'
        },
        {
            key: 'animation',
            label: '动画',
            valueType: 'string',
            defaultValue: 'slide',
            dropdown: [
                { label: '滑动', value: 'slide' },
                { label: '淡入', value: 'fade' },
                { label: '卡片', value: 'card' }
            ],
        },
        {
            key: 'direction',
            label: '方向',
            valueType: 'string',
            defaultValue: 'horizontal',
            dropdown: [
                { label: '水平', value: 'horizontal' },
                { label: '垂直', value: 'vertical' }
            ],
        },
        {
            key: 'indicatorPosition',
            label: '指示器位置',
            valueType: 'string',
            defaultValue: 'bottom',
            dropdown: [
                { label: '顶部', value: 'top' },
                { label: '底部', value: 'bottom' },
                { label: '左侧', value: 'left' },
                { label: '右侧', value: 'right' },
                { label: '外部', value: 'outer'}
            ],
        },
        {
            key: 'indicator',
            label: '指示器样式',
            valueType: 'string',
            defaultValue: 'dot',
            dropdown: [
                { label: '点状', value: 'dot' },
                { label: '线条', value: 'line' },
                { label: '滑块', value: 'slider' },
                { label: '不显示', value: 'never' }
            ],
        },
        {
            key: 'showArrow',
            label: '显示箭头时机',
            valueType: 'string',
            defaultValue: 'hover',
            dropdown: [
                { label: '始终显示', value: 'always' },
                { label: '鼠标悬停时', value: 'hover' },
                { label: '从不显示', value: 'never' }
            ],
        },
        {
            key: 'autoplay',
            label: '自动播放',
            valueType: 'boolean',
            defaultValue: true,
        },
        {
            key: 'autoplayInterval',
            label: '自动播放间隔',
            valueType: 'number',
            defaultValue: 3000,
            unit: 'ms'
        },
        {
            key: 'pauseOnHover',
            label: '鼠标悬停暂停',
            valueType: 'boolean',
            defaultValue: true,
        }
    ],
    methods: [],
    events: [
        {
            key: 'onChange',
            label: '切换',
            params: [
                {
                    key: 'current',
                    label: '当前索引',
                    valueType: 'number'
                },
                {
                    key: 'previous',
                    label: '上一个索引',
                    valueType: 'number'
                },
                {
                    key: 'isManual',
                    label: '是否手动切换',
                    valueType: 'boolean'
                }
            ]
        },
        {
            key: 'onClick',
            label: '被点击',
            params: [
                {
                    key: 'current',
                    label: '当前索引',
                    valueType: 'number'
                }
            ]
        }
    ],
};

class Widget extends VisibleWidget {
    constructor(props) {
        super(props);
        this.__width = props.__width;
        this.__height = props.__height;
        this.images = props.images;
        this.animation = props.animation;
        this.direction = props.direction;
        this.indicatorPosition = props.indicatorPosition;
        this.indicator = props.indicator;
        this.showArrow = props.showArrow;
        this.autoplay = props.autoplay;
        this.autoplayInterval = props.autoplayInterval;
        this.pauseOnHover = props.pauseOnHover;

        debugger
    }

    render() {
        return (
            <Carousel animation={this.animation} direction={this.direction} indicatorPosition={this.indicatorPosition}
                indicatorType={this.indicator} showArrow={this.showArrow} autoPlay={this.autoplay ? {interval: this.autoplayInterval, hoverToPause: this.pauseOnHover} : false} style={{ width: this.__width, height: this.__height }} onChange={(current, previous, isManual) => {this.emit('onChange', current, previous, isManual)}} >
                {this.images.split(',').map((image, index) => (
                    <div key={index} style={{ width: '100%', cursor: 'pointer' }} onClick={() => {this.emit('onClick', index)}}>
                        <img src={image} alt={`Carousel Image ${index + 1}`} style={{ width: '100%' }} />
                    </div>
                ))}
                </Carousel>
        );
    }
}

/* 加载CSS */
!function () {
    function loadWidgetCSS() {
        const WIDGET_CSS = `@keyframes arco-carousel-slide-x-in{from{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes arco-carousel-slide-x-out{from{transform:translateX(0)}to{transform:translateX(-100%)}}@keyframes arco-carousel-slide-x-in-reverse{from{transform:translateX(-100%)}to{transform:translateX(0)}}@keyframes arco-carousel-slide-x-out-reverse{from{transform:translateX(0)}to{transform:translateX(100%)}}@keyframes arco-carousel-slide-y-in{from{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes arco-carousel-slide-y-out{from{transform:translateY(0)}to{transform:translateY(-100%)}}@keyframes arco-carousel-slide-y-in-reverse{from{transform:translateY(-100%)}to{transform:translateY(0)}}@keyframes arco-carousel-slide-y-out-reverse{from{transform:translateY(0)}to{transform:translateY(100%)}}@keyframes arco-carousel-card-bottom-to-middle{from{opacity:0;transform:translateX(0) translateZ(-400px)}to{opacity:.4;transform:translateX(0) translateZ(-200px)}}@keyframes arco-carousel-card-middle-to-bottom{from{opacity:.4;transform:translateX(-100%) translateZ(-200px)}to{opacity:0;transform:translateX(-100%) translateZ(-400px)}}@keyframes arco-carousel-card-middle-to-bottom-rtl{from{opacity:.4;transform:translateX(100%) translateZ(-200px)}to{opacity:0;transform:translateX(100%) translateZ(-400px)}}@keyframes arco-carousel-card-top-to-middle{from{opacity:1;transform:translateX(-50%) translateZ(0)}to{opacity:.4;transform:translateX(-100%) translateZ(-200px)}}@keyframes arco-carousel-card-top-to-middle-rtl{from{opacity:1;transform:translateX(50%) translateZ(0)}to{opacity:.4;transform:translateX(100%) translateZ(-200px)}}@keyframes arco-carousel-card-middle-to-top{from{opacity:.4;transform:translateX(0) translateZ(-200px)}to{opacity:1;transform:translateX(-50%) translateZ(0)}}@keyframes arco-carousel-card-middle-to-top-rtl{from{opacity:.4;transform:translateX(0) translateZ(-200px)}to{opacity:1;transform:translateX(50%) translateZ(0)}}@keyframes arco-carousel-card-bottom-to-middle-reverse{from{opacity:0;transform:translateX(-100%) translateZ(-400px)}to{opacity:.4;transform:translateX(-100%) translateZ(-200px)}}@keyframes arco-carousel-card-bottom-to-middle-reverse-rtl{from{opacity:0;transform:translateX(100%) translateZ(-400px)}to{opacity:.4;transform:translateX(100%) translateZ(-200px)}}@keyframes arco-carousel-card-middle-to-bottom-reverse{from{opacity:.4;transform:translateX(0) translateZ(-200px)}to{opacity:0;transform:translateX(0) translateZ(-400px)}}@keyframes arco-carousel-card-top-to-middle-reverse{from{opacity:1;transform:translateX(-50%) translateZ(0)}to{opacity:.4;transform:translateX(0) translateZ(-200px)}}@keyframes arco-carousel-card-top-to-middle-reverse-rtl{from{opacity:1;transform:translateX(50%) translateZ(0)}to{opacity:.4;transform:translateX(0) translateZ(-200px)}}@keyframes arco-carousel-card-middle-to-top-reverse{from{opacity:.4;transform:translateX(-100%) translateZ(-200px)}to{opacity:1;transform:translateX(-50%) translateZ(0)}}@keyframes arco-carousel-card-middle-to-top-reverse-rtl{from{opacity:.4;transform:translateX(100%) translateZ(-200px)}to{opacity:1;transform:translateX(50%) translateZ(0)}}@keyframes arco-carousel-card-right-to-middle{from{opacity:0;transform:translateX(-50%) translateY(0) translateZ(-400px)}to{opacity:.4;transform:translateX(-50%) translateY(0) translateZ(-200px)}}@keyframes arco-carousel-card-middle-to-right{from{opacity:.4;transform:translateX(-50%) translateY(-100%) translateZ(-200px)}to{opacity:0;transform:translateX(-50%) translateY(-100%) translateZ(-400px)}}@keyframes arco-carousel-card-left-to-middle{from{opacity:1;transform:translateX(-50%) translateY(-50%) translateZ(0)}to{opacity:.4;transform:translateX(-50%) translateY(-100%) translateZ(-200px)}}@keyframes arco-carousel-card-middle-to-left{from{opacity:.4;transform:translateX(-50%) translateY(0) translateZ(-200px)}to{opacity:1;transform:translateX(-50%) translateY(-50%) translateZ(0)}}@keyframes arco-carousel-card-right-to-middle-reverse{from{opacity:0;transform:translateX(-50%) translateY(-100%) translateZ(-400px)}to{opacity:.4;transform:translateX(-50%) translateY(-100%) translateZ(-200px)}}@keyframes arco-carousel-card-middle-to-right-reverse{from{opacity:.4;transform:translateX(-50%) translateY(0) translateZ(-200px)}to{opacity:0;transform:translateX(-50%) translateY(0) translateZ(-400px)}}@keyframes arco-carousel-card-left-to-middle-reverse{from{opacity:1;transform:translateX(-50%) translateY(-50%) translateZ(0)}to{opacity:.4;transform:translateX(-50%) translateY(0) translateZ(-200px)}}@keyframes arco-carousel-card-middle-to-left-reverse{from{opacity:.4;transform:translateX(-50%) translateY(-100%) translateZ(-200px)}to{opacity:1;transform:translateX(-50%) translateY(-50%) translateZ(0)}}.arco-carousel{position:relative}.arco-carousel-indicator-position-outer{margin-bottom:30px}.arco-carousel-card,.arco-carousel-fade,.arco-carousel-slide{width:100%;height:100%;overflow:hidden;position:relative}.arco-carousel-card>*,.arco-carousel-fade>*,.arco-carousel-slide>*{position:absolute;left:0;top:0;width:100%;height:100%;overflow:hidden}.arco-carousel-item-current{z-index:1;position:relative}.arco-carousel-slide>:not(.arco-carousel-item-current){visibility:hidden}.arco-carousel-slide.arco-carousel-horizontal .arco-carousel-item-slide-out{display:block;animation:arco-carousel-slide-x-out}.arco-carousel-slide.arco-carousel-horizontal .arco-carousel-item-slide-in{display:block;animation:arco-carousel-slide-x-in}.arco-carousel-slide.arco-carousel-horizontal.arco-carousel-negative .arco-carousel-item-slide-out{animation:arco-carousel-slide-x-out-reverse}.arco-carousel-slide.arco-carousel-horizontal.arco-carousel-negative .arco-carousel-item-slide-in{animation:arco-carousel-slide-x-in-reverse}.arco-carousel-slide.arco-carousel-vertical .arco-carousel-item-slide-out{display:block;animation:arco-carousel-slide-y-out}.arco-carousel-slide.arco-carousel-vertical .arco-carousel-item-slide-in{display:block;animation:arco-carousel-slide-y-in}.arco-carousel-slide.arco-carousel-vertical.arco-carousel-negative .arco-carousel-item-slide-out{animation:arco-carousel-slide-y-out-reverse}.arco-carousel-slide.arco-carousel-vertical.arco-carousel-negative .arco-carousel-item-slide-in{animation:arco-carousel-slide-y-in-reverse}.arco-carousel-card{perspective:800px}.arco-carousel-card.arco-carousel-horizontal>*{left:50%;opacity:0;transform:translateX(-50%) translateZ(-400px);animation:arco-carousel-card-middle-to-bottom}.arco-carousel-rtl .arco-carousel-card.arco-carousel-horizontal>*{left:unset;right:50%;animation:arco-carousel-card-middle-to-bottom-rtl}.arco-carousel-card.arco-carousel-horizontal .arco-carousel-item-prev{opacity:.4;transform:translateX(-100%) translateZ(-200px);animation:arco-carousel-card-top-to-middle}.arco-carousel-rtl .arco-carousel-card.arco-carousel-horizontal .arco-carousel-item-prev{transform:translateX(100%) translateZ(-200px);animation:arco-carousel-card-top-to-middle-rtl}.arco-carousel-card.arco-carousel-horizontal .arco-carousel-item-next{opacity:.4;transform:translateX(0) translateZ(-200px);animation:arco-carousel-card-bottom-to-middle}.arco-carousel-card.arco-carousel-horizontal .arco-carousel-item-current{opacity:1;transform:translateX(-50%) translateZ(0);animation:arco-carousel-card-middle-to-top}.arco-carousel-rtl .arco-carousel-card.arco-carousel-horizontal .arco-carousel-item-current{transform:translateX(50%) translateZ(0);animation:arco-carousel-card-middle-to-top-rtl}.arco-carousel-card.arco-carousel-horizontal.arco-carousel-negative>*{animation:arco-carousel-card-middle-to-bottom-reverse}.arco-carousel-card.arco-carousel-horizontal.arco-carousel-negative .arco-carousel-item-prev{animation:arco-carousel-card-bottom-to-middle-reverse}.arco-carousel-rtl .arco-carousel-card.arco-carousel-horizontal.arco-carousel-negative .arco-carousel-item-prev{animation:arco-carousel-card-bottom-to-middle-reverse-rtl}.arco-carousel-card.arco-carousel-horizontal.arco-carousel-negative .arco-carousel-item-next{animation:arco-carousel-card-top-to-middle-reverse}.arco-carousel-rtl .arco-carousel-card.arco-carousel-horizontal.arco-carousel-negative .arco-carousel-item-next{animation:arco-carousel-card-top-to-middle-reverse-rtl}.arco-carousel-card.arco-carousel-horizontal.arco-carousel-negative .arco-carousel-item-current{animation:arco-carousel-card-middle-to-top-reverse}.arco-carousel-rtl .arco-carousel-card.arco-carousel-horizontal.arco-carousel-negative .arco-carousel-item-current{animation:arco-carousel-card-middle-to-top-reverse-rtl}.arco-carousel-card.arco-carousel-vertical>*{top:50%;left:50%;opacity:0;transform:translateX(-50%) translateY(-50%) translateZ(-400px);animation:arco-carousel-card-middle-to-right;display:flex;justify-content:center}.arco-carousel-card.arco-carousel-vertical .arco-carousel-item-prev{opacity:.4;transform:translateX(-50%) translateY(-100%) translateZ(-200px);animation:arco-carousel-card-left-to-middle}.arco-carousel-card.arco-carousel-vertical .arco-carousel-item-next{opacity:.4;transform:translateX(-50%) translateY(0) translateZ(-200px);animation:arco-carousel-card-right-to-middle}.arco-carousel-card.arco-carousel-vertical .arco-carousel-item-current{opacity:1;transform:translateX(-50%) translateY(-50%) translateZ(0);animation:arco-carousel-card-middle-to-left}.arco-carousel-card.arco-carousel-negative>*{animation:arco-carousel-card-middle-to-right-reverse}.arco-carousel-card.arco-carousel-negative .arco-carousel-item-prev{animation:arco-carousel-card-right-to-middle-reverse}.arco-carousel-card.arco-carousel-negative .arco-carousel-item-next{animation:arco-carousel-card-left-to-middle-reverse}.arco-carousel-card.arco-carousel-negative .arco-carousel-item-current{animation:arco-carousel-card-middle-to-left-reverse}.arco-carousel-fade>*{left:50%;transform:translateX(-50%);opacity:0}.arco-carousel-fade .arco-carousel-item-current{opacity:1}.arco-carousel-indicator{display:flex;position:absolute;margin:0;padding:0}.arco-carousel-indicator-wrapper{position:absolute;z-index:2}.arco-carousel-indicator-wrapper-top{left:0;right:0;top:0;height:48px;background:linear-gradient(180deg,rgba(0,0,0,.15) 0,rgba(0,0,0,0) 87%)}.arco-carousel-indicator-wrapper-bottom{left:0;right:0;bottom:0;height:48px;background:linear-gradient(180deg,rgba(0,0,0,0) 13%,rgba(0,0,0,.15) 100%)}.arco-carousel-indicator-wrapper-left{left:0;top:0;width:48px;height:100%;background:linear-gradient(90deg,rgba(0,0,0,.15) 0,rgba(0,0,0,0) 87%)}.arco-carousel-indicator-wrapper-right{right:0;top:0;width:48px;height:100%;background:linear-gradient(90deg,rgba(0,0,0,0) 13%,rgba(0,0,0,.15) 100%)}.arco-carousel-indicator-wrapper-outer{left:0;right:0;background:0 0}.arco-carousel-indicator-wrapper-outer-right{right:0;top:0;width:20px;height:100%}.arco-carousel-indicator-bottom{bottom:12px;left:50%;transform:translateX(-50%)}.arco-carousel-indicator-top{top:12px;left:50%;transform:translateX(-50%)}.arco-carousel-indicator-left{left:12px;top:50%;transform:translate(-50%,-50%) rotate(90deg)}.arco-carousel-indicator-right{right:12px;top:50%;transform:translate(50%,-50%) rotate(90deg)}.arco-carousel-indicator-outer{left:50%;transform:translateX(-50%);padding:4px;border-radius:20px;background-color:transparent}.arco-carousel-indicator-outer.arco-carousel-indicator-dot{bottom:-22px}.arco-carousel-indicator-outer.arco-carousel-indicator-line{bottom:-20px}.arco-carousel-indicator-outer.arco-carousel-indicator-slider{padding:0;bottom:-16px;background-color:rgba(var(--gray-4),.5)}.arco-carousel-indicator-outer .arco-carousel-indicator-item{background-color:rgba(var(--gray-4),.5)}.arco-carousel-indicator-outer .arco-carousel-indicator-item-active,.arco-carousel-indicator-outer .arco-carousel-indicator-item:hover{background-color:var(--color-fill-4)}.arco-carousel-indicator-outer-right{top:50%;left:50%;transform:translate(-50%,-50%) rotate(90deg);padding:4px;border-radius:20px;background-color:transparent}.arco-carousel-indicator-outer-right.arco-carousel-indicator-slider{padding:0;background-color:rgba(var(--gray-4),.5)}.arco-carousel-indicator-outer-right .arco-carousel-indicator-item{background-color:rgba(var(--gray-4),.5)}.arco-carousel-indicator-outer-right .arco-carousel-indicator-item-active,.arco-carousel-indicator-outer-right .arco-carousel-indicator-item:hover{background-color:var(--color-fill-4)}.arco-carousel-indicator-item{display:inline-block;border-radius:var(--border-radius-medium);background-color:rgba(255,255,255,.3);cursor:pointer}.arco-carousel-indicator-item-active,.arco-carousel-indicator-item:hover{background-color:var(--color-white)}.arco-carousel-indicator-dot .arco-carousel-indicator-item{width:6px;height:6px;border-radius:50%}.arco-carousel-indicator-dot .arco-carousel-indicator-item:not(:last-child){margin-right:8px}.arco-carousel-indicator-line .arco-carousel-indicator-item{width:12px;height:4px}.arco-carousel-indicator-line .arco-carousel-indicator-item:not(:last-child){margin-right:8px}.arco-carousel-indicator-slider{width:48px;height:4px;border-radius:var(--border-radius-medium);background-color:rgba(255,255,255,.3);cursor:pointer}.arco-carousel-indicator-slider .arco-carousel-indicator-item{position:absolute;top:0;height:100%;transition:left .3s}.arco-carousel-arrow>div{display:flex;align-items:center;justify-content:center;position:absolute;width:24px;height:24px;border-radius:50%;color:var(--color-white);background-color:rgba(255,255,255,.3);cursor:pointer;z-index:2;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.arco-carousel-arrow>div:focus-visible{box-shadow:0 0 0 2px var(--color-primary-light-3)}.arco-carousel-arrow>div>svg{color:var(--color-white);font-size:14px}.arco-carousel-arrow>div:hover{background-color:rgba(255,255,255,.5)}.arco-carousel-arrow-left{left:12px;top:50%;transform:translateY(-50%)}.arco-carousel-arrow-right{top:50%;transform:translateY(-50%);right:12px}.arco-carousel-arrow-top{left:50%;transform:translateX(-50%);top:12px}.arco-carousel-arrow-bottom{left:50%;transform:translateX(-50%);bottom:12px}.arco-carousel-arrow-hover div{opacity:0;transition:all .3s}.arco-carousel:hover .arco-carousel-arrow-hover div{opacity:1}.arco-carousel-rtl{direction:rtl}.arco-carousel-rtl .arco-carousel-indicator-dot .arco-carousel-indicator-item:not(:last-child){margin-left:8px;margin-right:0}.arco-carousel-rtl .arco-carousel-indicator-line .arco-carousel-indicator-item:not(:last-child){margin-left:8px;margin-right:0}body[arco-theme=dark] .arco-carousel-arrow>div{background-color:rgba(var(--gray-1),.3)}body[arco-theme=dark] .arco-carousel-arrow>div:hover{background-color:rgba(var(--gray-1),.5)}body[arco-theme=dark] .arco-carousel-indicator-item,body[arco-theme=dark] .arco-carousel-indicator-slider{background-color:rgba(var(--gray-1),.3)}body[arco-theme=dark] .arco-carousel-indicator-item-active,body[arco-theme=dark] .arco-carousel-indicator-item:hover{background-color:var(--color-white)}body[arco-theme=dark] .arco-carousel-indicator-outer.arco-carousel-indicator-slider{background-color:rgba(var(--gray-4),.5)}body[arco-theme=dark] .arco-carousel-indicator-outer .arco-carousel-indicator-item-active,body[arco-theme=dark] .arco-carousel-indicator-outer .arco-carousel-indicator-item:hover{background-color:var(--color-fill-4)}`

        const ele = document.createElement('style');
        ele.innerHTML = WIDGET_CSS;
        document.head.appendChild(ele);
    }
    loadBaseCSS()
    loadWidgetCSS()
}()

exports.types = types;
exports.widget = Widget;
