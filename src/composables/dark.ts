// https://github.com/elucidator-project/elucidator-blog-starter/blob/main/src/utils/dark.ts
import { useDark, useToggle } from "@vueuse/core"

export const isDark = useDark()
export const toggleDark = useToggle(isDark)
