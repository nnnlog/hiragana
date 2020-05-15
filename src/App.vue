<template>
	<div>
		<h1>히라가나를 외워보자</h1>
		<hr>
		<div>
			<div v-if="!start">
				<button @click="startTest">단어 테스트 시작</button><br>
				{{ test_msg }}
			</div>
			<div v-else>
				맞은 개수 : {{ correct }}<br>
				틀린 개수 : {{ num - correct }}<br>
				남은 개수 : {{ origin.length - num }}
			</div>
		</div>

		<hr>
		<table v-if="!start">
			<thead>
				<tr>
					<td>히라가나</td>
					<td>발음</td>
				</tr>
			</thead>
			<tbody>
				<tr v-for="v in origin">
					<td>{{v.text}}</td>
					<td>{{v.speak}}</td>
				</tr>
			</tbody>
		</table>
		<div v-else>
			<div style="font-size: 50px;">{{ list[num].text }}</div>
			<hr>
			<button v-for="(v, i) in extraVars" @click="clickInput(i)" style="display: block; margin: 5px;">
				{{ v }}
			</button>
			<div style="font-size: 20px;">{{msg}}</div>
		</div>
	</div>
</template>

<style>
</style>

<script>
	const origin = [
		{text: "あ", speak: "a"},
		{text: "い", speak: "i"},
		{text: "う", speak: "u"},
		{text: "え", speak: "e"},
		{text: "お", speak: "o"},
		{text: "か", speak: "ka"},
		{text: "き", speak: "ki"},
		{text: "く", speak: "ku"},
		{text: "け", speak: "ke"},
		{text: "こ", speak: "ko"},
		{text: "さ", speak: "sa"},
		{text: "し", speak: "shi"},
		{text: "す", speak: "su"},
		{text: "せ", speak: "se"},
		{text: "そ", speak: "so"},
		{text: "た", speak: "ta"},
		{text: "ち", speak: "chi"},
		{text: "つ", speak: "tsu"},
		{text: "て", speak: "te"},
		{text: "と", speak: "to"},
		{text: "な", speak: "na"},
		{text: "に", speak: "ni"},
		{text: "ぬ", speak: "nu"},
		{text: "ね", speak: "ne"},
		{text: "の", speak: "no"},
		{text: "は", speak: "ha"},
		{text: "ひ", speak: "hi"},
		{text: "ふ", speak: "hu"},
		{text: "へ", speak: "he"},
		{text: "ほ", speak: "ho"},
		{text: "ま", speak: "ma"},
		{text: "み", speak: "mi"},
		{text: "む", speak: "mu"},
		{text: "め", speak: "me"},
		{text: "も", speak: "mo"},
		{text: "や", speak: "ya"},
		{text: "ゆ", speak: "yu"},
		{text: "よ", speak: "yo"},
		{text: "ら", speak: "ra"},
		{text: "り", speak: "ri"},
		{text: "る", speak: "ru"},
		{text: "れ", speak: "re"},
		{text: "ろ", speak: "ro"},
		{text: "わ", speak: "wa"},
		{text: "を", speak: "o"},
		{text: "ん", speak: "n"}
	];

	export default {
		data() {
			return {
				start: false,
				correct: 0,
				num: 0,
				list: origin.slice(0),
				origin: origin,
				extraVars: [],
				msg: null,
				test_msg: null
			};
		},
		methods: {
			startTest() {
				if (this.start) {
					alert("이미 테스트를 시작했습니다.");
					return;
				}
				this.test_msg = null;
				this.start = true;
				this.complete = this.correct = this.num = 0;

				this.list = this.shuffle(this.origin.slice(0));
				this.renderInput();
			},
			renderInput() {
				this.extraVars = this.getRandomInput();
				this.extraVars.push(this.list[this.num].speak);
				this.extraVars = this.shuffle(this.extraVars);
			},
			clickInput(id) {
				if (this.extraVars[id] === this.list[this.num].speak) {
					this.msg = "정답입니다.";
					this.correct++;
				}else{
					this.msg = `오답입니다.\n정답 : ${this.list[this.num].text} (${this.list[this.num].speak})`;
				}
				this.extraVars = [];
				if (++this.num === this.list.length) {
					this.start = false;
					this.test_msg = `총 ${this.list.length}개 중 ${this.correct}개를 맞췄습니다.`;
					return;
				}
				this.renderInput();
			},
			getRandomInput() {
				let tmp = this.shuffle(this.list.slice(0)), res = [];
				for (let i = 0; i < 4; i++) {
					if (tmp[0].text === this.list[this.num].text) tmp.shift();
					res.push(tmp.shift().speak);
				}
				return res;
			},
			shuffle(arr) {
				for (let i = 0; i < arr.length; i++) {
					let prev = arr[i];
					let random = Math.min(parseInt(Math.random() * arr.length), arr.length - 1);
					arr[i] = arr[random];
					arr[random] = prev;
				}
				return arr;
			}
		}
	}
</script>