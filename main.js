$(function(){
    //候補を配列で設定
    let aryList = ['ぴえんについて','ぱおんについて','ぞーんについて','トリックすき？','ブラジル好き？','SDGS','ブロックチェーン！！！'];
    
    //グローバル変数
    let key = 0;
    let max_len = aryList.length - 1;
    let randStart; //箱
    let speed = 50; //シャッフルスピード
    
    //--------------------------ここでルーレットっぽい表示をする----------------------------//

    //文字シャッフル関数
    //20ミリ秒毎に候補の文字列をシャッフルさせる
    //↓の場合でも書ける
    // let randShuffle= function(){
        function randShuffle(){//aryList.lengthを順番で表示する
        if(key > max_len) key = 0; //keyがマックスレングスより上の時、キーは0
        //キーとして7が出たらフルシカトします
        $('.rand_name').text(aryList[key]);//HTML的なアプローチでrand_nameのテキストにaryList[key]を渡してね。
        key++;//KEY＋１をKEYに代入＝次の順番を出すための処理
        }
    //文字シャッフル開始
    randStart = setInterval(randShuffle, speed);
    //setIntervalは関数とミリ秒を指定すると、繰り返し読んでくれる関数

    //--------------------------ここでストップクリックの関数定義している----------------------------//

    function stop_click(){//HTML的なアプローチでstopのクリック関数に関数渡してね。
    let random = Math.floor(Math.random() * (max_len + 1)); //ランダムで配列の数を取得
    $('.rand_name').text(aryList[random]); //対象の数値に該当する文字を表示
    clearInterval(randStart); //シャッフルストップ
    $(this).hide(); //止めるボタンの非表示
    $('.restart').show(); //再開ボタンの表示
    $('.start').show(); //gameのスタートボタンを表示
    }

    //--------------------------ここでリスタートの関数定義している----------------------------//

    function restart(){
      $(this).hide(); //再開ボタンの非表示
      $('.start').hide(); //再開ボタンの非表示
      $('.stop').show(); //止めるボタンの表示
      randStart = setInterval(randShuffle, speed); //シャッフル再開
    }

    //--------------------------ここでリスタートの関数定義している----------------------------//

    function start(){
      $(this).hide(); //再開ボタンの非表示
      $('.start').show(); //止めるボタンの表示
      location.href = "/karaoke.html";
    }

    //--------------------------ここでルーレットを定義する----------------------------//
    
    //回転を止める（抽選結果）
    $('.stop').click(stop_click);
    
    //回転を再開する
    $('.restart').click(restart);

    //ゲームを開始する
    $('.start').click(start);
});

    //------------------------------------------------------//

    $(window).on('load',function(){
      $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述

    //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
      $("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
      
          $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与

      });
    //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
      
    //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
      $('.splashbg').on('animationend', function() {    
          //この中に動かしたいJSを記載
      });
      //=====ここまで背景が伸びた後に動かしたいJSをまとめる
          
    });

    /*画面遷移アニメーション*/

    $(function() {
      $('.slider').slick({
        autoplay: false,//自動的に動き出すか。初期値はfalse。
        infinite: false,//スライドをループさせるかどうか。初期値はtrue。
        speed: 500,//スライドのスピード。初期値は300。
        slidesToShow: 3,//スライドを画面に3枚見せる
        slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
        prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
        nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
        centerMode: true,//要素を中央ぞろえにする
        variableWidth: true,//幅の違う画像の高さを揃えて表示
        dots: true,//下部ドットナビゲーションの表示
      });
  });

  
  $(function(){
    $('#ms_timer').countdowntimer({
      minutes :1,
      size : "lg"
    });
  });
