<template>
	<div>
		<h1>hello ..........{{aaa}}</h1>
		<button @click="getData">FA</button>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data() {
			return {
				aaa : {}
			}
		},
		methods : {
			init : function(){
				var _self = this;
				_self.aaa = "tyest2";
			},
			
			getData : function(){
				console.log("进入方法");
				var _self = this;
				  $.ajax({
                    type : "GET",
                    url : "http://localhost:8080/hello",
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