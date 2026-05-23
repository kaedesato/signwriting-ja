---
title: フォントのインストール
description: Sutton式手話文字をコンピュータで美しく表示・編集するために必要な専用 TrueType フォント（SuttonSignWriting）のダウンロードと各OSへのインストール手順を解説します。
---

SignWritingをWebブラウザだけでなく、**Microsoft Word、Excel、テキストエディタ、デザインソフト**などで表示したり、独自のドキュメントを作成したりするには、専用の TrueType フォントをシステムにインストールする必要があります。

このページでは、公式の専用フォントの入手方法と、各OS（Windows、macOS、Linux、モバイル）でのインストール手順を詳しく解説します。

---

## 📥 フォントのダウンロード

SignWritingの表示・描画には、以下の**2つのフォント（Line と Fill）がペアで必要**になります。
1. **SuttonSignWritingLine.ttf** (手の輪郭や動きの矢印の線を描画するフォント)
2. **SuttonSignWritingFill.ttf** (手のひらの白い「塗りつぶし」を描画するフォント)

### 公式ダウンロードリンク
公式のフォントファイルは、GitHubの Sutton SignWriting 組織のフォントリポジトリから最新版をダウンロードできます。

- **GitHub リポジトリ**: [sutton-signwriting/font-ttf](https://github.com/sutton-signwriting/font-ttf)
- **直接ダウンロードリンク (最新安定版)**:
  * ⬇️ [SuttonSignWritingLine.ttf (ダウンロード)](https://raw.githubusercontent.com/sutton-signwriting/font-ttf/master/SuttonSignWritingLine.ttf)
  * ⬇️ [SuttonSignWritingFill.ttf (ダウンロード)](https://raw.githubusercontent.com/sutton-signwriting/font-ttf/master/SuttonSignWritingFill.ttf)

上記リンクを右クリックして「名前を付けてリンク先を保存」を選択し、PCに保存してください。

---

## 💻 OS別のインストール手順

ダウンロードした2つのフォントファイルを、使用しているOSのシステムフォントディレクトリにインストールします。必ず**両方のフォント**をインストールしてください。

### 1. Windows の場合
1. ダウンロードしたフォントファイル（`SuttonSignWritingLine.ttf` と `SuttonSignWritingFill.ttf`）を保存したフォルダーを開きます。
2. 2つのファイルを同時に選択し、右クリックします。
3. メニューから **「インストール」**（または管理者権限がある場合は **「すべてのユーザー用にインストール」**）を選択します。
4. インストールが自動的に完了します。

### 2. macOS の場合
1. Finder でダウンロードしたフォントファイル（`SuttonSignWritingLine.ttf`）をダブルクリックします。
2. 自動的に **Font Book** アプリが起動するので、右下の **「フォントをインストール (Install Font)」** ボタンをクリックします。
3. 同様にもう一方の `SuttonSignWritingFill.ttf` もダブルクリックし、「フォントをインストール」します。
4. Font Book 内の「ユーザー」セクションに `SuttonSignWriting` が表示されていれば完了です。

### 3. Linux の場合
1. ターミナルを開き、ユーザー用のフォントディレクトリを作成します。
   ```bash
   mkdir -p ~/.local/share/fonts
   ```
2. ダウンロードした2つのフォントファイルを、作成したフォントディレクトリにコピーします。
   ```bash
   cp SuttonSignWritingLine.ttf SuttonSignWritingFill.ttf ~/.local/share/fonts/
   ```
3. システムのフォントキャッシュを更新します。
   ```bash
   fc-cache -f -v
   ```
4. インストールが成功したか以下のコマンドで確認します。
   ```bash
   fc-list | grep -i Sutton
   ```

### 4. iOS / iPadOS の場合
iOSデバイスでは、構成プロファイルを使用してカスタムフォントを追加できます。
1. App Store から **「Fontcase」**（無料のオープンソースアプリ）などのフォント管理アプリをインストールします。
2. アプリ内にダウンロードした2つの `.ttf` ファイルを追加します。
3. アプリの指示に従って構成プロファイルを生成・保存し、iOSの **「設定 ➡ プロファイルがダウンロードされました」** からインストールを許可します。

---

## 🔍 インストールの確認方法

インストールが成功したかどうかをテストしてみましょう。

専用フォントが正しくインストールされていると、以下のUnicode文字（U+1D800〜U+1DAAF）が、ただの空白や豆腐（`□`）ではなく、**黒い輪郭と白い塗りつぶしの美しい手形状の記号**として表示されます。

*   **人差し指を立てた手形状 (Index Hand)**: 𝠀
*   **平らな手形状 (Flat Hand)**: 𝤁
*   **タッチ記号 (Touch Asterisk)**: 𝨀

> [!TIP]
> もしインストールしたにもかかわらず記号が正しく表示されない場合は、使用しているアプリケーション（Wordやブラウザ）を一度完全に閉じて**再起動**してください。システムが新しいフォントファイルを読み込むのに再起動が必要な場合があります。

---

## 🛠️ なぜフォントをインストールするのか？ (メリット)

本Webサイトでは、フォントをインストールしていなくても自動的にWeb経由でフォントをロード（Webフォント）して描画されるように構成されています。しかし、ローカルPCにインストールすることには以下の大きなメリットがあります。

1. **オフライン環境での完全な描画**
   インターネットに接続していないローカル環境でも、手話文字ドキュメントが乱れることなく高速に描画されます。
2. **Microsoft Word等の一般ソフトでの編集・執筆**
   WordやExcelなどのワープロソフトに直接 Unicode の SignWriting 文字を打ち込み、文字サイズや色を自由に変更して印刷可能な手話ドキュメントを作成できます。
3. **描画速度の劇的な向上**
   ブラウザが毎回Webからフォントファイルをダウンロードする必要がなくなるため、ページ読み込みや手話記号の描画が格段に軽快になります。
