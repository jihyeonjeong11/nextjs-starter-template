12-23

커스텀 디버깅 페이지 아래 앱컨픽 사용

앱상태 컨픽

- 1. 랜딩
- 2. 점검중
- 3. 커밍 순

폴더 구조

(docs) 인앱 독스 추가부분

(main) 실제 데모 앱 추가 부분

lib - 외부 라이브러리 사용 부분

외부 라이브러리 개요

nextjs-toploader - 내부 내비게이션 시 로딩 바
cslx - 클래스에 조건을 거는 등 더 쉽게 사용가능
twmerge - tailwinds 클래스를 합치는 과정에서(리액트 프롭으로 받을 때) 더 쉽게 넣을 수 있음
lucide-react - icon 모음 및 svg 그리기

```
// 사용법

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

<Component
      className={cn("px-5 py-14 md:px-6 md:py-20 lg:py-24", className)}
      {...restProps}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
        {children}
      </div>
    </Component>

```

커스텀 테스팅 모달 -> 앱 컨픽 상태 변경할 수 있도록

12/24

radix react/slot 확인하기

- polymophism을 위해 사용

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

12/25

커밍순 페이지
랜딩 페이지 작성 중

12/28

- done
  added cva for css variants
  added sign in button

- to be done
  푸터
  테마
  © 2024 Group Finder. All Rights Reserved. Built with ❤️ by Groupie, LLC

회원가입 폼

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
