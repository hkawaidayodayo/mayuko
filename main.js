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
    randStart = setInterval(randShuffle, speed);//setIntervalは関数とミリ秒を指定すると、繰り返し読んでくれる関数

    //--------------------------ここでストップクリックの関数定義している----------------------------//

    function stop_click(){//HTML的なアプローチでstopのクリック関数に関数渡してね。
    let random = Math.floor(Math.random() * (max_len + 1)); //ランダムで配列の数を取得
    $('.rand_name').text(aryList[random]); //対象の数値に該当する文字を表示
    clearInterval(randStart); //シャッフルストップ
    $(this).hide(); //止めるボタンの非表示
    $('.restart').show(); //再開ボタンの表示
    }

    //--------------------------ここでリスタートの関数定義している----------------------------//

    function restart(){
      $(this).hide(); //再開ボタンの非表示
      $('.stop').show(); //止めるボタンの表示
      randStart = setInterval(randShuffle, speed); //シャッフル再開
    }

    //--------------------------ここでルーレットを定義する----------------------------//
    
    //回転を止める（抽選結果）
    $('.stop').click(stop_click);
    
    //回転を再開する
    $('.restart').click(restart);


  
});
