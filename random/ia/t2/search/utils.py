def print_path(path, cost=None, heuristic=None):
    if path:
        for i, state in enumerate(path, 1):
            msg = f'Step {i} \t[{state}]'
            if heuristic:
                msg += f' heuristic = {heuristic(state)}'
            print(msg)
        if cost:
            print(f'Cost = {cost(path)}')
    else:
        print('No existe')
