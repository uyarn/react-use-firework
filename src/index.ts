import { useEffect, } from "react";

export default function useFireWork(props: { a: string }) {
  const { a } = props
  console.log(a)
  const fun = () => { };

  useEffect(() => {
    fun();
  }, []);
}
