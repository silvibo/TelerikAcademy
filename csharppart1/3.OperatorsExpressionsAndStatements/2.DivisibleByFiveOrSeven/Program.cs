﻿// Write a boolean expression that checks for given integer if it can be divided
// (without remainder) by 7 and 5 in the same time.

using System;

class Program
{
    static void Main()
    {
        int a = 70;
        bool divisible = (a % 35) == 0;
        Console.WriteLine("{0} is divisble by 5 and 7 at the same time: {1}", a, divisible);
    }
}
