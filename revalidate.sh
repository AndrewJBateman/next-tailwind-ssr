curl "https://next-tailwind-ssr.vercel.app/api/revalidate" \
  -X POST \
  -H "Content-Type: application/json" \
  -d "[\"/note/1\"]"