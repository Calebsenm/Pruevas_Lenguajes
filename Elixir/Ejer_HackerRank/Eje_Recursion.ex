

defmodule Recursion do 
  def fact(num) when num <= 1 do
    IO.puts "Hello world"
  end

  def fact (num) do
    IO.puts "Hello world"
    fact ( num - 1 )
  end
end

nu = IO.gets("Input a number -> ")|> String.trim_trailing
nu = String.to_integer(nu)
Recursion.fact(nu)





