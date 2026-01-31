import { Statistic } from '@arco-design/web-react';
import loadBaseCSS from '../common/loadBaseCSS.js';

const types = {
    type: 'ARCO_STATISTIC_WIDGET',
    icon: 'https://unpkg.byted-static.com/latest/byted/arco-config/assets/favicon.ico',
    title: 'Arco 数值显示',
    version: '1.0.0',
    isInvisibleWidget: false,
    isGlobalWidget: false,
    properties: [
        {
            key: 'the_title',
            label: '标题',
            valueType: 'string',
            defaultValue: 'Downloads'
        },
        {
            key: 'the_value',
            label: '数值',
            valueType: 'number',
            defaultValue: 125670
        },
        {
            key: 'groupSeparator',
            label: '千分位',
            valueType: 'boolean',
            defaultValue: true
        },
        {
            key: 'precision',
            label: '精度',
            valueType: 'number',
            defaultValue: 0
        },
        {
            key: 'prefix',
            label: '前缀',
            valueType: 'string',
            defaultValue: ''
        },
        {
            key: 'suffix',
            label: '后缀',
            valueType: 'string',
            defaultValue: ''
        },
        {
            key: 'countUp',
            label: '数字滚动',
            valueType: 'boolean',
            defaultValue: false
        },
        {
            key: 'loading',
            label: '加载中',
            valueType: 'boolean',
            defaultValue: false
        },
        {
            key: 'color',
            label: '数值颜色',
            valueType: 'color',
            defaultValue: ''
        },
        {
            key: '__width',
            label: '宽度',
            valueType: 'number',
            defaultValue: 200,
        },
        {
            key: '__height',
            label: '高度',
            valueType: 'number',
            defaultValue: 100,
        }
    ],
    methods: [],
    events: []
};

class Widget extends VisibleWidget {
    constructor(props) {
        super(props);
        this.__width = props.__width;
        this.__height = props.__height;
        this.the_title = props.the_title;
        this.the_value = props.the_value;
        this.groupSeparator = props.groupSeparator;
        this.precision = props.precision;
        this.prefix = props.prefix;
        this.suffix = props.suffix;
        this.countUp = props.countUp;
        this.loading = props.loading;
        this.color = props.color;
    }

    render() {
        return (
            <div style={{ width: this.__width, height: this.__height }}>
                <Statistic
                    title={this.the_title}
                    value={this.the_value}
                    groupSeparator={this.groupSeparator}
                    precision={this.precision}
                    prefix={this.prefix}
                    suffix={this.suffix}
                    countUp={this.countUp}
                    loading={this.loading}
                    styleValue={this.color ? { color: this.color } : {}}
                />
            </div>
        );
    }
}

/* 加载CSS */
!function () {
    function loadWidgetCSS() {
        const WIDGET_CSS = `
.arco-skeleton{display:flex}.arco-skeleton-header{display:flex}.arco-skeleton-header .arco-skeleton-image{background-color:var(--color-fill-2);width:48px;height:48px;border-radius:var(--border-radius-small)}.arco-skeleton-header .arco-skeleton-image-circle{border-radius:50%}.arco-skeleton-header .arco-skeleton-image-small{width:36px;height:36px}.arco-skeleton-header .arco-skeleton-image-large{width:60px;height:60px}.arco-skeleton-header .arco-skeleton-image-left{margin-right:16px}.arco-skeleton-header .arco-skeleton-image-right{margin-left:16px}.arco-skeleton-content{flex-grow:1;overflow:hidden}.arco-skeleton-content .arco-skeleton-text{list-style:none;padding:0;margin:0}.arco-skeleton-content .arco-skeleton-text-row{background-color:var(--color-fill-2);height:16px}.arco-skeleton-content .arco-skeleton-text-row:not(:last-child){margin-bottom:16px}.arco-skeleton-animate .arco-skeleton-image,.arco-skeleton-animate .arco-skeleton-text>li{background:linear-gradient(90deg,var(--color-fill-2) 25%,var(--color-fill-3) 37%,var(--color-fill-2) 63%);background-size:400% 100%;animation:arco-skeleton-circle 1.5s cubic-bezier(0,0,1,1) infinite}@keyframes arco-skeleton-circle{0%{background-position:100% 50%}100%{background-position:0 50%}}.arco-skeleton-rtl .arco-skeleton-image-left{margin-right:0;margin-left:16px}.arco-skeleton-rtl .arco-skeleton-image-right{margin-left:0;margin-right:16px}
.arco-statistic{display:inline-block;line-height:1.5715;color:var(--color-text-2)}.arco-statistic-title{font-size:14px;margin-bottom:8px;color:var(--color-text-2)}.arco-statistic-content .arco-statistic-value{white-space:nowrap;font-size:26px;font-weight:500;color:var(--color-text-1)}.arco-statistic-content .arco-statistic-value-int{white-space:nowrap}.arco-statistic-content .arco-statistic-value-decimal{font-size:26px;display:inline-block}.arco-statistic-content .arco-statistic-value-suffix{font-size:14px;margin-left:4px}.arco-statistic-content .arco-statistic-value-prefix{font-size:14px;margin-right:4px}.arco-statistic-extra{margin-top:8px;color:var(--color-text-2)}.arco-statistic-rtl .arco-statistic-content .arco-statistic-value-suffix{margin-right:4px;margin-left:0}.arco-statistic-rtl .arco-statistic-content .arco-statistic-value-prefix{margin-right:0;margin-left:4px}
`;
        const ele = document.createElement('style');
        ele.innerHTML = WIDGET_CSS;
        document.head.appendChild(ele);
    }
    loadBaseCSS()
    loadWidgetCSS()
}()

exports.types = types;
exports.widget = Widget;
