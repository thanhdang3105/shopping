export default function html ([first,...String],...values) {
    return values.reduce((acc, cur) => 
        acc.concat(cur,String.shift())
    ,[first])
    .filter(x => x && x !==true || x === 0)
    .join('')
}

export function createStores (reducer) {
    let state = reducer()

    const roots = new Map()

    function render() {
        for(const [components,root] of roots) {
            const output = components()
            root.innerHTML = output
        }
    }

    return {
        attach(components,root){
            roots.set(components,root)
            render()
        },
        connect(selector = state => state) {
            return components => (props,...args) => 
                components(Object.assign({},props,selector(state),...args))
        },
        dispatch(actions,...args){
            state = reducer(state,actions,args)
            render()
        }
    }
}