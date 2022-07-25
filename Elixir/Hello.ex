
defmodule Factorial do
  def fact(n) do
      (n == 1 or n == 0) && 1 || n * Factorial.fact(n-1)
  end
end

{number, _} = IO.gets("enter number: ") |> Integer.parse
answer = Factorial.fact number
IO.puts("El factortial de #{number} es: #{answer}")


