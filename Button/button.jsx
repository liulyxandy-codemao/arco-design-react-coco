// import Arco from '@arco-design/web-react'

const types = {
    type: 'ARCO_BUTTON_WIDGET',
    icon: 'https://unpkg.byted-static.com/latest/byted/arco-config/assets/favicon.ico',
    title: 'Arco 按钮',
    version: '1.0.0',
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
            key: '__disabled',
            label: '禁用',
            valueType: 'boolean',
            defaultValue: false,
        },
        {
            key: 'content',
            label: '文案',
            valueType: 'string',
            defaultValue: '编程猫'
        },
        {
            key: 'btntype',
            label: '类型',
            valueType: 'string',
            defaultValue: 'primary',
            dropdown: [
                { label: '主要', value: 'primary' },
                { label: '次要', value: 'secondary' },
                { label: '虚线', value: 'dashed' },
                { label: '线形', value: 'outline' },
                { label: '文本', value: 'text' },
            ],
        },
        {
            key: 'shape',
            label: '形状',
            valueType: 'string',
            defaultValue: 'square',
            dropdown: [
                { label: '方形', value: 'square' },
                { label: '圆形', value: 'circle' },
                { label: '圆角', value: 'round' }
            ],
        },
        {
            key: 'status',
            label: '状态',
            valueType: 'string',
            defaultValue: 'default',
            dropdown: [
                { label: '默认', value: 'default' },
                { label: '成功', value: 'success' },
                { label: '危险', value: 'danger' },
                { label: '警告', value: 'warning' }
            ],
        },
        {
            key: 'loading',
            label: '加载中',
            valueType: 'boolean',
            defaultValue: false
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
        this.btntype = props.btntype;
        this.shape = props.shape;
        this.width = props.__width;
        this.height = props.__height;
        this.disabled = props.disabled;
        this.content = props.content;
        this.status = props.status;
        this.loading = props.loading;
        debugger
    }

    render() {
        return (
            <Arco.Button type={this.btntype} shape={this.shape} status={this.status} disabled={this.disabled} loading={this.loading}
                style={{
                    width: this.width + 'px',
                    height: this.height + 'px'
                }} onClick={() => this.emit('onClick')}>{this.content}</Arco.Button>
        );
    }
}

exports.types = types;
exports.widget = Widget;
