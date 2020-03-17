Component({
    options: {
        addGlobalClass: true,
    },
    //组件的对外属性，是属性名到属性设置的映射表
    properties:{
        coffeeData: {
            type:Array,
            value:''
        },
        coffeeTitle: {
            type:String,
            value:''
        },
        show:{
            type:Number,
            value:''
        },
        meta:{
            type:Object,
            value:""
        }

    },
    //组件的内部数据，和properties 一同用于组件的模板渲染
    data:{


    },
    //组件数据字段监听器，用于监听properties 和 data的变化
    observers:{

    },
    //组件的方法
    methods:{
        _jumpImg(e){
            var link = e.currentTarget.dataset.link;
            if (!link || link == 'uto_miniprogram') return

            wx.navigateTo({
                url: link
            })
        },
    }
    //生成的组件实例可以在组件的方法，生命周期函数和属性observer中通过this访问。
    /*组件包含一些属性和方法
    属性名
    * is  string  组件的文件路径
    * is  string  节点id
    * dataset  string  节点dataset
    * data object  组件数据，包括内部数据和属性值
    * properties object 组件数据，包括内部数据和属性值（与data一致）
    *
    *
    方法名
    * setData       object      设置data并执行视图层渲染
    * hasBehavio    object      检查组件是否具有 behavior （检查时会递归检查被直接或间接引入的所有behavior）
    * triggerEvent  String name, Object detail, Object options      触发事件
    * */
})