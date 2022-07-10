TypeScript React tailwind Important Target Demo
=================================

tailwind在与复杂的react组件共用时，必须面对的问题之一样式的优先级，
很可能tailwind的className竞争不过导致样式无效。

有三个解决办法：
1. `tailwind.config.js`中`important:true`，会强制在每个样式后添加`!important`， 但由于它太强势了， 
  有可能会破坏inline-styles，出现样式问题
2. `tailwind.config.js`中`important:'root'`，则会生成`#root .text-red-500 {}`，通过增加根节点来提高优先级，同时不破坏inline-styles
3. 使用处直接在className前添加`!`，比如`<div className="!text-red-500 hover:!text-yellow-500">`

本demo演示的是第二种

```
npm install
npm start
```

It will open page on browser automatically.
