var data = {
    headerTitle: 'Demo',
    addWidgetText: 'Add Widget',
    addListWidgetsText: 'Add List Widget'
}

Vue.component('header-component', {
    data: function () {
        return data
    },
    template: `<header>
                    <h1>{{ headerTitle }}</h1>
                </header>`
})

Vue.component('group-buttons', {
    data: function() {
        return data
    },
    props: [
        'element',
        'group'
    ],
    methods: {
        constructorGridStack: function () {
            $(`${this.element}`).gridstack();
        },
        addNewWidget: function () {
            this.constructorGridStack()
            let grid = $(`${this.element}`).data('gridstack')
            this.count = grid.grid.nodes.length + 1
            grid.addWidget(
                $(`<div class="grid-stack-item"><div class="grid-stack-item-content"><span>${this.count}</span><div/><div/>`),
                0,
                0,
                Math.floor(1 + 4 * Math.random()),
                Math.floor(1 + 4 * Math.random()),
                true
            )
            this.count++
        },
        addListWidget: function () {
            this.group = parseInt(`${this.group}`)
            this.items = (this.group === 1) ? [
                { x: 0, y: 0, width: 2, height: 2 },
                { x: 2, y: 0, width: 4, height: 4 },
                { x: 6, y: 0, width: 2, height: 2 },
                { x: 8, y: 0, width: 4, height: 2 },
                { x: 0, y: 2, width: 2, height: 2 },
                { x: 6, y: 2, width: 4, height: 2 },
                { x: 10, y: 2, width: 2, height: 2 },
                { x: 0, y: 4, width: 2, height: 4 },
                { x: 2, y: 4, width: 4, height: 2 },
                { x: 6, y: 4, width: 2, height: 2 },
                { x: 8, y: 4, width: 4, height: 4 },
                { x: 2, y: 6, width: 6, height: 2 }
            ] : [
                {x: 0, y: 0, width: 4, height: 2},
                {x: 4, y: 0, width: 4, height: 4},
                {x: 8, y: 0, width: 2, height: 2},
                {x: 10, y: 0, width: 2, height: 2},
                {x: 0, y: 2, width: 2, height: 2},
                {x: 2, y: 2, width: 2, height: 4},
                {x: 8, y: 2, width: 4, height: 2},
                {x: 0, y: 4, width: 2, height: 2},
                {x: 4, y: 4, width: 4, height: 2},
                {x: 8, y: 4, width: 2, height: 2},
                {x: 10, y: 4, width: 2, height: 2},
                {x: 0, y: 6, width: 12, height: 2}
            ]
            this.constructorGridStack()
            let grid = $(`${this.element}`).data('gridstack')
            this.count = grid.grid.nodes.length + 1
            this.items.map(object => {
                grid.addWidget(
                    $(`<div class="grid-stack-item"><div class="grid-stack-item-content"><span>${this.count}</span><div/><div/>`),
                    object.x,
                    object.y,
                    object.width,
                    object.height
                )
                this.count++;
            })
        }
    },
    template: `<div>
                    <a href="#" id="add-widget" class="button" @click="addNewWidget">{{ addWidgetText }}</a>
                    <a href="#" id="add-list-widget" class="button" @click="addListWidget">{{ addListWidgetsText }}</a>
                </div>`
})

new Vue({
    el: '#app'
})

