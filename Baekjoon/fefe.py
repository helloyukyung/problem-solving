def superStack(operations):
    stack = []
    inc_dict = {}
    
    for i in range(len(operations)):
        order = operations[i].split()

        if order[0] == "push":
            stack.append(int(order[1]))
            print(stack[-1])
        elif order[0] == "pop":
            if stack:
                stack.pop()
                stack_len = len(stack)
                diff = 0
                new_dict = {}
                
                
                for inc in inc_dict.items():
                    

                    if int(inc[0]) >= stack_len:
                        diff += inc[1]
                        
                        if new_dict.get(inc[0]-1, 0):
                            new_dict[int(inc[0])-1] += inc[1]
                        else:
                            new_dict[int(inc[0])-1] = inc[1]
                    
                        inc_dict = new_dict

                
                if stack:
                    print(stack[-1] + diff)
                else:
                    print("EMPTY")
                
            else:
                print("EMPTY")
            
        elif order[0] == "inc":
            if inc_dict.get(int(order[1]), 0):
                inc_dict[int(order[1])] += int(order[2])
            else:
                inc_dict[int(order[1])] = int(order[2])
            
            diff = 0
            for inc in inc_dict.items():
                if int(inc[0]) >= stack_len:
                    diff += inc[1]

            print(stack[-1]+diff)

operations = [
"push 4",
"pop",
"push 3",
"push 5",
"push 2",
"inc 3 1",
"pop",
"push 1",
"inc 2 2",
"push 4",
"pop",
"pop",
]
superStack(operations)