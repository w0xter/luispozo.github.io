import itertools

from search import BaseState

class State(BaseState):
    def __init__(self, capacity, jars=None):
        self.capacity = capacity
        self.num_jars = len(capacity)
        self.jars = jars or [0 for _ in range(self.num_jars)]

    def successors(self):
        successors = []
        # Primero, los estados de rellenar las vasijas
        for i, (jar, capacity) in enumerate(zip(self.jars, self.capacity)):
            if jar < capacity:
                new_jars = self.jars[:]
                new_jars[i] = capacity
                successors.append(State(capacity=self.capacity, jars=new_jars))
        
        # Segundo, los estados de vaciarlas
        for i, jar in enumerate(self.jars):
            if jar > 0:
                new_jars = self.jars[:]
                new_jars[i] = 0
                successors.append(State(capacity=self.capacity, jars=new_jars))

        # Por último, los estados de rellenar unas vasijas con otras
        pairs = itertools.permutations(range(self.num_jars), 2)
        for i, j in pairs:
            # Echaremos el agua de la jarra i a la jarra j si j no está llena
            if self.jars[i] > 0 and self.jars[j] < self.capacity[j]:
                # Echamos hasta que la jarra i se vacía o hasta que la jarra j se llena.
                quantity = min(self.jars[i], self.capacity[j] - self.jars[j])
                # Creamos el nuevo estado
                new_jars = self.jars[:]
                new_jars[i] -= quantity
                new_jars[j] += quantity
                successors.append(State(capacity=self.capacity, jars=new_jars))

        return successors

    def equals(self, other):
        return self.jars == other.jars and self.capacity == other.capacity
    
    def __str__(self):
        return ' '.join(map(str, self.jars))

def solution(jars_config):
    def f(path):
        last_state = path[-1]
        return last_state.jars == jars_config

    return f