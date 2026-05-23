---
title: フォントのインストール
description: Googleが開発した世界規格「Noto Sans SignWriting」および Sutton公式 TrueType フォントのダウンロードとインストール手順について詳しく解説します。
---

SignWritingをWebブラウザだけでなく、**Microsoft Word、Excel、テキストエディタ、デザインソフト**などで表示したり、独自のドキュメントを作成したりするには、専用の TrueType フォントをシステムにインストールする必要があります。

特に、Googleが「すべての言語を文字コードで表現する」ために開発した**「Noto Sans SignWriting」**フォントは、単一のファイルでSignWritingの全Unicode領域（U+1D800〜U+1DAAF）を美しくカバーする、現在の最も推奨される標準フォントです。

このページでは、Googleの「Noto Sans SignWriting」をメインとし、公式フォントの入手方法と各OSへのインストール手順を詳しく解説します。

---

## 📥 推奨：Noto Sans SignWriting のダウンロード (Google Fonts)

Googleが提供する **Noto Sans SignWriting** は、1つのフォントファイル（`.ttf`）だけで手話文字の全記号を綺麗に表示できる極めて軽量で安定した標準フォントです。

### 直接ダウンロードリンク
- ⬇️ [NotoSansSignWriting-Regular.ttf (ダウンロード)](https://github.com/googlefonts/noto-fonts/raw/main/hinted/ttf/NotoSansSignWriting/NotoSansSignWriting-Regular.ttf)
  *(GitHubのGoogle Fonts公式ソースより最新のTTFファイルを直接保存します)*

上記リンクを右クリックし、「名前を付けてリンク先を保存」を選択してPCに保存してください。

---

## 💻 OS別のインストール手順

ダウンロードした `NotoSansSignWriting-Regular.ttf` を、使用しているOSのシステムフォントディレクトリにインストールします。

### 1. Windows の場合
1. ダウンロードしたフォントファイル `NotoSansSignWriting-Regular.ttf` を保存したフォルダーを開きます。
2. ファイルを右クリックし、メニューから **「インストール」**（または管理者権限がある場合は **「すべてのユーザー用にインストール」**）を選択します。
3. インストールが自動的かつ一瞬で完了します。

### 2. macOS の場合
1. Finder でダウンロードしたフォントファイル `NotoSansSignWriting-Regular.ttf` をダブルクリックします。
2. 自動的に **Font Book** アプリが起動するので、右下の **「フォントをインストール」** ボタンをクリックします。
3. インストールが完了し、システム全体のすべてのテキストアプリケーションでフォントが有効になります。

### 3. Linux の場合
1. ターミナルを開き、ユーザー用のフォントディレクトリを作成します。
   ```bash
   mkdir -p ~/.local/share/fonts
   ```
2. ダウンロードしたファイルを、作成したフォントディレクトリにコピーします。
   ```bash
   cp NotoSansSignWriting-Regular.ttf ~/.local/share/fonts/
   ```
3. システムのフォントキャッシュを更新します。
   ```bash
   fc-cache -f -v
   ```
4. インストールが成功したか以下のコマンドで確認します。
   ```bash
   fc-list | grep -i NotoSansSignWriting
   ```

### 4. iOS / iPadOS (iPhone・iPad) の場合
iOSデバイスでは、構成プロファイルを使用してカスタムフォントを追加できます。
1. App Store から **「Fontcase」**（無料のオープンソースアプリ）などのフォント管理アプリをインストールします。
2. アプリ内にダウンロードした `NotoSansSignWriting-Regular.ttf` ファイルを追加します。
3. アプリの指示に従って構成プロファイルを生成・保存し、iOSの **「設定 ➡ プロファイルがダウンロードされました」** からインストールを許可します。

---

## 🔍 インストールの動作確認テスト

インストールが成功したかどうかをテストしてみましょう。

`Noto Sans SignWriting` がシステムに正しくインストールされている（またはWebフォントが読み込まれている）と、以下のUnicode文字が、空白や豆腐（`□`）ではなく、**黒い輪郭と白い塗りつぶしの美しい手形状・接触記号**として表示されます。

<div class="glass-card" style="padding: 2rem;">
  <h4 style="margin-top: 0; font-family: var(--sl-font-heading); color: var(--brand-cyan);">プレーンテキストによる表示デモ</h4>
  <p style="font-size: 0.95rem; color: var(--sl-color-gray-3); margin-bottom: 1.5rem;">
    以下の記号は画像ではなく、フォントを通じてブラウザが文字として描画しています。
  </p>
  
  <ul style="list-style: none; padding-left: 0; display: flex; flex-direction: column; gap: 1rem;">
    <li style="display: flex; align-items: center; gap: 1.5rem;">
      <span class="unicode-signwriting" style="font-size: 3rem; background: rgba(255,255,255,0.05); border-radius: 8px; padding: 8px;">𝠀</span>
      <div>
        <strong>人差し指を立てた手形状 (Index Hand)</strong>
        <div style="font-size: 0.85rem; color: var(--sl-color-gray-3);">コードポイント: <code>U+1D800</code></div>
      </div>
    </li>
    <li style="display: flex; align-items: center; gap: 1.5rem;">
      <span class="unicode-signwriting" style="font-size: 3rem; background: rgba(255,255,255,0.05); border-radius: 8px; padding: 8px;">𝤁</span>
      <div>
        <strong>平らな手形状 (Flat Hand)</strong>
        <div style="font-size: 0.85rem; color: var(--sl-color-gray-3);">コードポイント: <code>U+1D901</code></div>
      </div>
    </li>
    <li style="display: flex; align-items: center; gap: 1.5rem;">
      <span class="unicode-signwriting" style="font-size: 3rem; background: rgba(255,255,255,0.05); border-radius: 8px; padding: 8px;">𝨀</span>
      <div>
        <strong>タッチ記号 (Touch Asterisk)</strong>
        <div style="font-size: 0.85rem; color: var(--sl-color-gray-3);">コードポイント: <code>U+1DA00</code></div>
      </div>
    </li>
  </ul>
</div>

> [!TIP]
> もしインストールしたにもかかわらず記号が正しく表示されない場合は、使用しているアプリケーション（Wordやブラウザ）を一度完全に閉じて**再起動**してください。システムが新しいフォントファイルを読み込むのにアプリの再起動が必要な場合があります。

---

## 🔗 参考：Sutton公式 TrueType フォント (Line & Fill)

Sutton公式が昔から配布している元のフォントファイルを使用して表示させたい場合は、以下の2つのフォント（Line と Fill）を両方インストールする必要があります。

*   **SuttonSignWritingLine.ttf** (手の輪郭や動きの矢印を描画): [⬇️ ダウンロード](https://raw.githubusercontent.com/sutton-signwriting/font-ttf/master/SuttonSignWritingLine.ttf)
*   **SuttonSignWritingFill.ttf** (手のひらの白い塗りつぶしを描画): [⬇️ ダウンロード](https://raw.githubusercontent.com/sutton-signwriting/font-ttf/master/SuttonSignWritingFill.ttf)

*(※ 現在のモダンなWebアプリケーション開発や一般文書（Word等）でのテキスト記述には、1つのファイルで動作する Google の **Noto Sans SignWriting** の使用を強く推奨します)*

---

## 🛠️ システムにフォントをインストールするメリット

本Webサイトでは、フォントをインストールしていなくても、ブラウザが自動的にGoogle FontsのCDNから **Noto Sans SignWriting** をロード（Webフォント）して描画されるように構成されています。しかし、ローカルPCにインストールすることには以下の大きなメリットがあります。

1. **オフライン環境での完全な描画**
   インターネットに接続していないローカル環境でも、手話文字ドキュメントが乱れることなく高速に描画されます。
2. **Microsoft Word等の一般ソフトでの編集・執筆**
   WordやExcelなどのワープロソフトに直接 Unicode の SignWriting 文字をコピー＆ペーストし、文字サイズや色を自由に変更して印刷可能な手話ドキュメントをローカルで作成・編集できます。
3. **文字データの軽量性と検索性**
   グラフィック画像として手話記号を貼り付けるのではなく、「テキスト文字」として文書を保持できるため、ファイルサイズが極限まで軽量化し、手話文字での文書内検索も可能になります。
