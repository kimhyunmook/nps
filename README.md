# Next-Props-Shared

### Created to share components more intuitively

```typescript
import UiProvider, { Container } from "next-props-shared";
// target page
function SharedUiPage() {
  return (
    <UiContainer>
      <Container title={"title"}>
        <MyComponent />
      </Container>
    </UiContainer>
  );
}
```
