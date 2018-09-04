<template>
	<div>
		<h1>hello ..........{{aaa}}</h1>
		<div class="form-horizontal">
		  <div class="form-group">
		    <label for="inputEmail3" class="col-sm-2 control-label">id</label>
		    <div class="col-sm-10">
		      <input type="text" class="form-control" placeholder="id" v-model="aaa.id">
		    </div>
		  </div>
		  <div class="form-group">
		    <label for="inputPassword3" class="col-sm-2 control-label">name</label>
		    <div class="col-sm-10">
		      <input type="text" class="form-control" placeholder="name" v-model="aaa.name">
		    </div>
		  </div>
		  <div class="form-group">
		    <label for="inputPassword3" class="col-sm-2 control-label">age</label>
		    <div class="col-sm-10">
		      <input type="text" class="form-control" placeholder="age" v-model="aaa.age">
		    </div>
		  </div>
		</div>
		<button @click="getData(1)">1号</button>
		<button @click="getData(2)">2号</button>
		<button @click="getData(3)">3号</button>
		<button @click="getData(4)">4号</button>
		<button @click="getData(5)">5号</button>
	</div>
</template>

<script>
	export default {
		name: 'emp',
		data() {
			return {
				aaa : {
					id:"",
					name:"",
					age:""
				}
				
			}
		},
		methods : {
			init : function(){
				var _self = this;
				_self.aaa = "tyest2";
			},
			
			getData : function(index){
				//console.log("进入方法");
				var _self = this;
				  $.ajax({
                    type : "GET",
                    url : "http://localhost:8080/employee/" + index ,
                    dataType : "json",
                    ContentType : "application/json",
                    success : function(data) {
                    	console.log("data " + data);
　　　　　　　　　　　　　_self.aaa = data;
                    },
                    error : function(){
                        alert("错误");
                    }
                });
			}
		},
		mounted : function(){
			this.init();
		}
		
		
	}
</script>

<style>
</style>