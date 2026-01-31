import { Avatar } from '@arco-design/web-react'
import loadBaseCSS from '../common/loadBaseCSS.js'

const types = {
    type: 'ARCO_AVATAR_WIDGET',
    icon: 'https://unpkg.byted-static.com/latest/byted/arco-config/assets/favicon.ico',
    title: 'Arco 头像',
    version: '2.0.0',
    isInvisibleWidget: false,
    isGlobalWidget: false,
    properties: [
        {
            key: '__height',
            label: '高度',
            valueType: 'number',
            defaultValue: 32,
        },
        {
            key: 'shape',
            label: '形状',
            valueType: 'string',
            defaultValue: 'square',
            dropdown: [
                { label: '方形', value: 'square' },
                { label: '圆形', value: 'circle' }
            ],
        },
        {
            key: 'content_type',
            label: '类型',
            valueType: 'string',
            defaultValue: 'text',
            dropdown: [
                { label: '图片', value: 'image' },
                { label: '文本', value: 'text' },
            ],
        },
        {
            key: 'content',
            label: '内容',
            valueType: 'string',
            defaultValue: '编程猫'
        },
        {
            key: 'bgcolor',
            label: '背景色',
            valueType: 'color',
            defaultValue: '#f0f0f0',
        }
    ],
    methods: [],
    events: [
        {
            key: 'onClick',
            label: '被点击',
            params: []
        }
    ],
};

class Widget extends VisibleWidget {
    constructor(props) {
        super(props);
        this.content_type = props.content_type;
        this.shape = props.shape;
        this.size = props.__height;
        this.content = props.content;
        this.bgcolor = props.bgcolor;
        debugger
    }

    render() {
        return (
            <Avatar shape={this.shape} size={this.size} style={{ backgroundColor: this.bgcolor }}>
                {this.content_type === 'text' ? this.content : <img src={this.content} alt="avatar" />}
            </Avatar>
        );
    }
}

/* 加载CSS */
!function () {
    function loadWidgetCSS() {
        const WIDGET_CSS = `.arco-avatar{display:inline-flex;align-items:center;position:relative;background-color:var(--color-fill-4);white-space:nowrap;color:var(--color-white);box-sizing:border-box;vertical-align:middle;width:40px;height:40px;font-size:20px}.arco-avatar-circle{border-radius:var(--border-radius-circle)}.arco-avatar-circle .arco-avatar-image{border-radius:var(--border-radius-circle);overflow:hidden}.arco-avatar-square{border-radius:var(--border-radius-medium)}.arco-avatar-square .arco-avatar-image{border-radius:var(--border-radius-medium);overflow:hidden}.arco-avatar-text{position:absolute;left:50%;transform-origin:0 center;transform:translateX(-50%);font-weight:500;line-height:1}.arco-avatar-image{display:inline-flex;width:100%;height:100%}.arco-avatar-image img,.arco-avatar-image picture{width:100%;height:100%}.arco-avatar-trigger-icon-button{position:absolute;display:inline-flex;align-items:center;justify-content:center;bottom:-4px;right:-4px;color:var(--color-fill-4);font-size:12px;border-radius:var(--border-radius-circle);width:20px;height:20px;line-height:20px;background-color:var(--color-neutral-2);transition:background-color .1s cubic-bezier(0,0,1,1);z-index:1}.arco-avatar-trigger-icon-mask{position:absolute;display:flex;opacity:0;z-index:0;align-items:center;justify-content:center;width:100%;height:100%;top:0;left:0;font-size:16px;transition:all .1s cubic-bezier(0,0,1,1);border-radius:var(--border-radius-medium);background-color:rgba(29,33,41,.6);color:var(--color-white)}.arco-avatar-circle .arco-avatar-trigger-icon-mask{border-radius:var(--border-radius-circle)}.arco-avatar-with-trigger-icon{cursor:pointer}.arco-avatar-with-trigger-icon:hover .arco-avatar-trigger-icon-mask{z-index:2;opacity:1}.arco-avatar-with-trigger-icon:hover .arco-avatar-trigger-icon-button{background-color:var(--color-neutral-3)}.arco-avatar-rtl{direction:rtl}.arco-avatar-rtl .arco-avatar-trigger-icon-button{right:unset;left:-4px}.arco-avatar-group{display:inline-block;line-height:0}.arco-avatar-group-max-count-avatar{cursor:default;color:var(--color-white);font-size:20px}.arco-avatar-group-rtl{direction:rtl}.arco-avatar-group .arco-avatar{border:2px solid var(--color-bg-2)}.arco-avatar-group .arco-avatar:not(:first-child){margin-left:-10px}.arco-avatar-group-popover .arco-avatar:not(:first-child){margin-left:4px}`

        const ele = document.createElement('style');
        ele.innerHTML = WIDGET_CSS;
        document.head.appendChild(ele);
    }
    loadBaseCSS()
    loadWidgetCSS()
}()

exports.types = types;
exports.widget = Widget;
