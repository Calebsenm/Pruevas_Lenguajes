

defmodule Recursion do 
  def fact(num,tx) when num <= 1 do
    IO.puts tx
  end

  def fact(num,tx) do
    IO.puts tx
    fact( num - 1,tx)
  end
end

nu = IO.gets("Input a number -> ")|> String.trim_trailing
nu = String.to_integer(nu)

tx = IO.gets("Input Input a tex -> ")
txt = String.trim(tx)
Recursion.fact(nu,txt)





