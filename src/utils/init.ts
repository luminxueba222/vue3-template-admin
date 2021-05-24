import { Input, Select, Checkbox, InputNumber, Switch,Button,Card,Breadcrumb,message } from 'ant-design-vue';
const plugins = [Button, Card, Breadcrumb,Input];

export const setupAntd = (app: any, options = {}) => {
  app.config.globalProperties.$message = message;
  plugins.forEach((plugin) => {
    app.use(plugin);
  });
};

