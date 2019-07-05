<template>
    <div class="recharge-content">

      <div class="recharge-content-first" v-if="show==0">
        <input type="text" maxlength="11" v-model="telephoneNum" class="reachar-item-input" placeholder="请输入充值号码"/>

        <div class="recharge-content-first-ul">
      <ul>
        <li v-for="(item,index) in list"  :class="{heightColor:num==index}" @click="numHandel(index,item.text)">
          {{item.price}}
          <i v-show="find"><span >售价:</span>{{item.text}}</i>
       </li>
      </ul>
        </div>
        <div class="recharge-content-first-favorable">
          <p  @click="changeHandel()">优惠卷</p>
          <p>京豆</p>
        </div>
        <div class="recharge-content-first-buy">
         <span>合计: ￥<i ref="i">0</i></span>
          <a href="#" @click="rechargeRouter()">立即下单</a>
        </div>
      </div>
      <div class="recharge-content-two"  v-if="show==1">
        <input type="text" maxlength="11" v-model="telephoneNum2" class="reachar-item-input" placeholder="请输入充值号码"/>

        <div class="recharge-content-first-ul">
        <ul>
          <li v-for="(item,index) in lists" :class="{heightColor:figure==index}" @click="numHandel(index,item.text)">
            {{item.price}}
            <i v-show="finds"><span >售价:</span>{{item.text}}</i>
          </li>
        </ul>
        </div>
        <div class="recharge-content-first-favorable">
          <p>优惠卷</p>
          <p>京豆</p>
        </div>
        <div class="recharge-content-two-hint">
          因可能存在系统缓存、页面更新导致价格变动异常等不确定性情况出现，如您发现活动商品标价或促销信息有异常，请您立即联系我们，以便我们及时补正。
        </div>
        <div class="recharge-content-two-buy">
          <span>合计: ￥<i ref="i">0.00</i></span>
          <a href="#" @click="rechargesRouter">立即下单</a>
        </div>
      </div>
    </div>
</template>

<script>
    import indexHender from "../index/indexHender";

    export default {
        name: "rechargeContent",
      data(){
          return{
            list:[{price:"10元",text:"9.96"},
              {price:"10元",text:"9.96"},
              {price:"20元",text:"19.96"},
              {price:"30元",text:"29.96"},
              {price:"50元",text:"49.96"},
              {price:"100元",text:"99.96"},
              {price:"300元",text:"299.96"},
              {price:"500元",text:"499.96"},
              {price:"1000元",text:"999.96"}
            ],
            lists:[{price:"30M",text:"9.96"},
              {price:"50M",text:"9.96"},
              {price:"100M",text:"19.96"},
              {price:"200M",text:"29.96"},
              {price:"500M",text:"49.96"},
              {price:"1G",text:"99.96"},],
            show:0,
            find:false,
            finds:false,
            num:-1,
            telephoneNum: '',
            telephoneNum2: '',
            figure:-1,
          }
      },
      methods:{
        numHandel(index,item){
          var regs = /^(13|14|15|16|17|18|19)\d{9}$/;
          if (regs.test(this.telephoneNum)) {
            this.num=index;
            this.$refs.i.innerHTML=item;
          }
          if (regs.test(this.telephoneNum2)) {
            this.figure=index;
            this.$refs.i.innerHTML=item;
          }
        },
        rechargeRouter(){
            let a=this.$refs.i.innerHTML;
          this.axios.post("http://10.35.162.3:9005/index/paycost/phone/",{
            "token":"123456",
            "tel":"this.telephoneNum",
            "payasset":a
          })
            .then((data)=>{
                let phone=data.data;
                if(phone.code===400){
                  this.$router.push({
                    path:'/login'
                  })
                };
              if (phone.code===200&&this.telephoneNum!=='' && this.$refs.i.innerHTML!==0){
                this.$router.push({
                  path:'/pay',
                  params:{xinxi:phone}
                })
              };
                console.log(data);
            })
            .catch((err)=>{
              console.log(err);
            })
        },
        rechargesRouter(){
            let b=this.$refs.i.innerHTML;
          this.axios.post("http://10.35.162.3:9005/index/paycost/traffic/",{
            "token":"1234-56",
            "tel":"this.telephoneNum2",
            "payasset":b
          })
            .then((data)=>{
              let traffic=data.data;
              if (traffic.code===400){
                this.$router.push({
                  path:'/login'
                })
              }
              if (traffic.code===200&&this.telephoneNum2!=='' && this.$refs.i.innerHTML!==0){
                this.$router.push({
                  path:'/pay',
                  params:{xinxi:traffic}
                })
              };

            })
            .catch((err)=>{
              console.log(err);
            })
        }
      },
      created() {
          indexHender:{
            this.Observer.$on("handel",(val)=>{
              this.show=val;
              val!=0?this.telephoneNum='':this.telephoneNum='';
              val!=0?this.find=false:this.find=false;
              val!=0?this.num=-1:this.num=-1;
              val!=0?this.$refs.i.innerHTML=0:this.$refs.i.innerHTML=0;
              val!=1?this.telephoneNum2='':this.telephoneNum2='';
              val!=1?this.finds=false:this.finds=false;
              val!=1?this.figure=-1:this.figure=-1;
              val!=1?this.$refs.i.innerHTML=0:this.$refs.i.innerHTML=0;

            });
            }
        },
      updated() {
        var regs = /^(13|14|15|16|17|18|19)\d{9}$/;
        if (regs.test(this.telephoneNum)) {
          this.find = true;
        }
        if (regs.test(this.telephoneNum2)) {
          this.finds = true;
        }

      }
    }

</script>

<style scoped>

</style>
