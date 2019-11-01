new Vue({
    el: '#app',
    data: {
        element: '',
        items: [],
        count: 0,
        headerTitle: 'Demo',
        addWidgetText: 'Add Widget',
        addListWidgetsText: 'Add List Widget'
    },
    methods: {
        constructorGridStack: function(element) {
            $(element).gridstack();
        },
        addNewWidget: function(element) {
            this.constructorGridStack(element)
            let grid = $(element).data('gridstack')
            this.count = grid.grid.nodes.length + 1
            grid.addWidget(
                $('<div class="grid-stack-item"><div class="grid-stack-item-content"><span>'+this.count+'</span><div/><div/>'),
                0,
                0,
                Math.floor(1 + 4 * Math.random()),
                Math.floor(1 + 4 * Math.random()),
                true
            )
            this.count++
        },
        addListWidget: function(element, items) {
            this.items = items || [
                {x: 0, y: 0, width: 2, height: 2},
                {x: 2, y: 0, width: 4, height: 4},
                {x: 6, y: 0, width: 2, height: 2},
                {x: 8, y: 0, width: 4, height: 2},
                {x: 0, y: 2, width: 2, height: 2},
                {x: 6, y: 2, width: 4, height: 2},
                {x: 10, y: 2, width: 2, height: 2},
                {x: 0, y: 4, width: 2, height: 4},
                {x: 2, y: 4, width: 4, height: 2},
                {x: 6, y: 4, width: 2, height: 2},
                {x: 8, y: 4, width: 4, height: 4},
                {x: 2, y: 6, width: 6, height: 2}
            ]
            this.constructorGridStack(element)
            let grid = $(element).data('gridstack')
            this.count = grid.grid.nodes.length + 1
            this.items.map( object => {
                grid.addWidget(
                    $('<div class="grid-stack-item"><div class="grid-stack-item-content"><span>'+this.count+'</span><div/><div/>'),
                        object.x,
                        object.y,
                        object.width,
                        object.height
                )
                this.count++;
            })
        }
    }
})