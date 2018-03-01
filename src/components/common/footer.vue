 <template>
  <div>
      <tabbar style="position:fixed">
        <tabbar-item v-for='flist in flists' :link='flist.link' :key="flist.id" :selected='$route.path == flist.link'>
            <img slot="icon" :src="flist.imgurl">
            <span slot="label">{{flist.name}}</span>
      </tabbar-item>

    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux/src/components/tabbar'

export default {
  data(){
    return{
      flists:[
        {link:'/Home',imgurl:require('../../../static/images/b1.png'),name:'首页'},
        {link:'/JiFen',imgurl:require('../../../static/images/b2.png'),name:'积分换'},
        {link:'/Shop',imgurl:require('../../../static/images/b3.png'),name:'实体店'},
        {link:'/Free',imgurl:require('../../../static/images/b4.png'),name:'免费送'},
        {link:'/ShoppingCart',imgurl:require('../../../static/images/b5.png'),name:'购物车'},
      ]
    }
  },
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>
<style>
</style>