$(function() {
    $('#hoge').textillate({
        loop: true,
        minDisplayTime: 3000,
        initialDelay: 2000,
        autoStart: true,

        in: {
            effect: 'fadeIn',
            delayScale: 1.5,
            delay: 20,
            sync: false,
            shuffle: false
        },

        out: {
            effect: 'fadeOut',
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: false
        }
    });

    $('.center-item').slick({
        infinite: true,
        slidesToShow: 1,
        centerMode: true, //要素を中央寄せ
        centerPadding: '100px', //両サイドの見えている部分のサイズ
        autoplay: true, //自動再生
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 480,
            settings: {
                centerMode: false,
            }
        }]
    });
})

const quiz = [{
    question: '自宅にいるときに大きな地震があった場合、避難する場所はどこが適切？',
    answers: [
        "キッチン",
        "リビング",
        "寝室",
        "バスルーム"
    ],
    correct: "バスルーム"
}, {
    question: '防災バッグは家のどこに置いておくのがよい？？',
    answers: [
        "キッチン",
        "寝室",
        "玄関",
        "押入れ"
    ],
    correct: "玄関"

}, {
    question: '山中にいるときに地震が発生したらどうする？',
    answers: [
        "少しでも高いところに登る",
        "急いで山から降りる",
        "急斜面や崖などから素早く離れる",
        "その場で助けを待つ"
    ],
    correct: "急斜面や崖などから素早く離れる"

}, {
    question: 'エレベーターの中にいるときに地震が発生したらどうする？',
    answers: [
        "全ての階のボタンを押す",
        "そのまま乗っている",
        "中からドアを叩く",
        "大声を出す"
    ],
    correct: "全ての階のボタンを押す"

}, {
    question: '人が一日に必要な水の量はどれぐらい？',
    answers: [
        "1L",
        "2L",
        "3L",
        "4L"
    ],
    correct: "3L"

}];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
//同様に選択肢も変える
//document.getElementsByTagName('button').textContent = answers[0];

//上記のコードだと、ボタンタグ4つあるので反映されない、一個目のボタンに反映されるように書き直さなあかん

//htmlのオブジェクトを取ってくる場合は、＄を使うのが暗黙のルール
const $button = document.getElementsByClassName('btn-primary');

const setUpQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    let buttonlength = $button.length;
    while (buttonIndex < buttonlength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setUpQuiz();

const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert("正解!");
        score++;
    } else {
        window.alert("不正解");
    }
    quizIndex++;
    if (quizIndex < quizLength) {
        //問題数があれば実行
        setUpQuiz();
    } else {
        //もし問題がなければこちらを実行
        window.alert("終了 あなたの正解数は" + score + "/" + quizLength + "です！");

    }

}

$button[0].addEventListener('click', (e) => {
    clickHandler(e);
});
$button[1].addEventListener('click', (e) => {
    clickHandler(e);
});
$button[2].addEventListener('click', (e) => {
    clickHandler(e);
});
$button[3].addEventListener('click', (e) => {
    clickHandler(e);
});
