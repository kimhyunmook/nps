# 📦 next-props-shared

> Storybook 없이 Next.js/React 컴포넌트를 쉽고 간편하게 공유·확인·수정할 수 있는 모듈

`next-props-shared`는 Storybook 설정 없이도

- 코드를 따로 학습하지 않아도
- UI와 Props 테이블을 즉시 확인하고
- VSCode에서 바로 코드 수정이 가능

하도록 도와주는 개발자 도구입니다.

---

## ✨ 주요 특징

1. **간편한 사용법**  
   별도의 설정/학습 필요 없이, 몇 줄의 코드로 바로 시작
2. **실시간 UI & Props 확인**  
   코드 열람 없이도 컴포넌트이름만 넘기면, 해당 컴포넌트의 UI와 Props 문서를 자동 렌더링
3. **VSCode 연동**  
   에디터에서 버튼 하나로 해당 컴포넌트 소스로 바로 이동 & 수정 가능

---

## 📦 설치

```bash
npm install next-props-shared
# 또는
yarn add next-props-shared
```

## 🚀 빠른 시작 (Quick Start)

다음 몇 줄의 코드만으로 `next-props-shared`를 즉시 사용해 볼 수 있습니다.

```tsx
// pages/shared-ui.tsx
import UiProvider, { Container } from "next-props-shared";
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
