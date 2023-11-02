# fe-monorepo

## 1. Installation

```sh
# pnpm이 없는 경우
npm install -g pnpm

pnpm install
pnpm init:monorepo

# ...

? monorepo root package.json name › {모노레포 프로젝트의 이름 입력}
```

## 2. Package.json Scripts

### 2-1. init:monorepo
모노레포 템플릿의 초기설정을 도와주는 스크립트를 실행합니다.

```sh
pnpm init:monorepo
#or
pnpm run init:monorepo
```

### 2-2. dev
모노레포 내 모든 하위 앱의 dev 스크립트를 실행합니다.

```sh
pnpm dev
#or
pnpm run dev
```

### 2-3. proxy
local-ssl-proxy를 실행합니다.

```sh
pnpm proxy
#or
pnpm run proxy
```

### 2-4. dev:proxy
모노레포 내 모든 하위 앱의 dev 스크립트와 local-ssl-proxy를 함께 실행합니다.

```sh
pnpm dev:proxy
#or
pnpm run dev:proxy
```

### 2-5. build
모노레포 내 모든 하위 앱의 build 스크립트를 실행합니다.

```sh
pnpm build
#or
pnpm run build
```

### 2-6. create:cert
local-ssl-proxy를 위한 인증서를 생성하는 스크립트를 실행합니다.

```sh
pnpm create:cert
#or
pnpm run create:cert
```

### 2-7. create:next
모노레포 내 apps 폴더에 Next.js 앱을 추가하는 스크립트를 실행합니다. 이 스크립트에 대한 자세한 사용법은 [여기](/packages/manager/READMD.md)를 참고하세요.

```sh
pnpm create:next
#or
pnpm run create:next
```

### 2-8. remove:node-modules
모노레포 내 모든 node-modules 폴더를 제거하는 스크립트를 실행합니다. 이 스크립트에 대한 자세한 사용법은 [여기](/packages/manager/READMD.md)를 참고하세요.

```sh
pnpm remove:node-modules
#or
pnpm run remove:node-modules
```
