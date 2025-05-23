# 📦 next-props-shared

> Next.js/React 컴포넌트를 쉽고 간편하게 공유·확인·수정할 수 있는 모듈

`next-props-shared`는 설정 없이도

- 코드를 따로 학습하지 않아도 됩니다.
- UI와 Props 테이블을 즉시 확인할 수 있습니다.
- VSCode에서 바로 코드 파일을 열 수 있습니다.

하도록 도와주는 개발자 도구입니다.

### 📝 주요 특징

1. **간편한 사용법**  
   별도의 설정/학습 필요 없이, 몇 줄의 코드로 바로 시작 가능합니다
   - provider 감싸주면 됩니다.
   - container 로 컴포넌트의 종류 구분이 가능합니다.
2. **실시간 UI & Props 확인**  
   코드 열람 없이도 컴포넌트이름만 넘기면, 해당 컴포넌트의 UI와 Props 문서를 자동 렌더링
3. **VSCode 연동**  
   에디터에서 버튼 하나로 해당 컴포넌트 소스로 바로 이동 & 수정 가능

### 📦 설치

```bash
npm install next-props-shared
```

```bash
yarn add next-props-shared
```

### 🚀 빠른 시작 (Quick Start)

다음 몇 줄의 코드만으로 `next-props-shared`를 즉시 사용해 볼 수 있습니다.

```tsx
// pages/shared-ui.tsx
import { UiProVider, Container } from "next-props-shared";
import { MyComponent } from "@/components"; // 공유할 컴포넌트

export default function SharedUiPage() {
  return (
    // UiProvider로 래핑하면 내부에서 필요한 Context/스타일이 자동 적용됩니다.
    <UiProvider>
      {/* Container: 제목과 함께 컴포넌트를 미리보기 */}
      <Container title="MyComponent Playground">
        <MyComponent />
      </Container>
    </UiProvider>
  );
}
```

### 함수: `FncType`

- 주어진 문자열로 함수 타입(Signature)을 시각적으로 렌더링해 주는 유틸 컴포넌트입니다. Props로 전달된 함수의 시그니처를 사용자가 쉽게 확인할 수 있도록 도와줍니다.

```tsx
<Mypomponent fnc={() => FncType("string|number")} />
```
