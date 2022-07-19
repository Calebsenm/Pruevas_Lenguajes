

defmodule Recursion do 
  def fact(num,tx) when num <= 1 do
    IO.puts "Hello world"
  end

  def fact (num,tx) do
    IO.puts "Hello world"
    fact ( num - 1,tx)
  end
end

nu = IO.gets("Input a number -> ")|> String.trim_trailing
nu = String.to_integer(nu)

tx = IO.gets "Text -> "
Recursion.fact(nu,tx)





