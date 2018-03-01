import App from '../App'
const Home = r => require.ensure([], () => r(require('@/components/page/home/home')), 'Home')
const JiFen = r => require.ensure([], () => r(require('@/components/page/jifen/jifen')), 'JiFen')
const Shop = r => require.ensure([], () => r(require('@/components/page/shop/shop')), 'Shop')
const Free = r => require.ensure([], () => r(require('@/components/page/free/free')), 'Free')
const List = r => require.ensure([], () => r(require('@/components/page/list/list')), 'List')
const Detail = r => require.ensure([], () => r(require('@/components/page/detail/detail')), 'Detail')
const ShoppingCart = r => require.ensure([], () => r(require('@/components/page/shoppingcart/shoppingcart')), 'ShoppingCart')
export default [
    {
      path: '/',
      component: App,
      children:[
      	 {
            path: '',
            redirect: '/Home'
        }, {
            path: '/Home',
            component: Home
        },{
            path: '/JiFen',
            component: JiFen
        },{
            path: '/Shop',
            component: Shop
        },{
            path: '/Free',
            component: Free
        },{
            path: '/List',
            component: List
        },{
            path: '/Detail',
            component: Detail
        },{
            path: '/ShoppingCart',
            component: ShoppingCart
        }

      ]
    }
  ]