# docker-node-handson
 DockerでNext.jsのサンプルプログラムを動かす

このドキュメントは、Dockerを使用してNext.jsのサンプルアプリケーションをセットアップし、実行するための手順をまとめたものです。

## 1. 作業ディレクトリの作成

まず、プロジェクト用のディレクトリを作成します。

```bash
mkdir next-handson
cd next-handson
```

## 2. Dockerfileの作成

次に、作成したディレクトリに`Dockerfile`という名前で以下の内容のファイルを作成します。

```dockerfile
# ベースイメージ: Node.jsの軽量Alpineイメージを使用
FROM node:18-alpine

# グローバルに create-next-appとgit をインストール
RUN npm install -g create-next-app
RUN apk update
RUN apk add git

# 作業ディレクトリの設定
WORKDIR /app

# コンテナ起動時はシェルを起動(インタラクティブモード用)
CMD ["sh"]
```

## 3. Dockerイメージのビルド

`Dockerfile`を元に、Dockerイメージをビルドします。

```bash
docker build -t my-node-next-app .
```

## 4. コンテナの起動とNext.jsアプリの作成

ビルドしたイメージを使ってコンテナを起動します。
`-v`オプションでホストのカレントディレクトリとコンテナの`/app`ディレクトリを同期（バインドマウント）します。

```bash
docker run -it -p 3000:3000 -v $(pwd):/app my-node-create-next-app
```
*補足: PowerShellやLinux/macOSのbashでは `$(pwd)` を使用しますが、Windowsのコマンドプロンプトでは `%cd%` を使用します。*


## 5. サンプルプログラムの実行
Gitリポジトリのクローン

```bash
git clone https://github.com/EngineerCafeJP/docker-handson.git
```

パッケージのインストール

クローンしたプロジェクトのディレクトリに移動し、必要なパッケージをインストールします。

```bash
cd <リポジトリ名>
npm install
```

開発サーバーの起動

以下のコマンドで開発サーバーを起動します。

```bash
npm run dev
```
サーバーが起動したら、ブラウザで http://localhost:3000/ にアクセスしてアプリケーションを確認できます。
