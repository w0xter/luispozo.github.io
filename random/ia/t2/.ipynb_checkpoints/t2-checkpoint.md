#Inteligencia Artificial: T2
##Busqueda de Espacios de Estado

###Definiciones:
- **Estado:** Un Estado es la representación de los elementos que describen un problema concreto en un momento dado.
- **Sucesores:** Son los estados que se puden alcanzar partiendo del estado actual.
- **Camino:** El camino es la lista de **Nodos** (*Estados*) que hemos recorrido para llegar al estado actual.
- **Lista de Caminos Pendientes:** Lista que contiene todos los caminos que aún no han sido explorados.
- **Reglas de Transción:** Reglas con las que decidiremos como elegir el siguiente *Estado*.
- **Heurística:** Función que nos estima lo próxima que está la *solución* de nuestro *Estado Actual*.
```PYTHON
def heuristic(state):
    # Operations and stuff
    return estimation_to_reach_the_goal
```
---

###Algoritmo Base:

El algoritmo base funciona siempre de la misma manera, se parte de una lista con un único nodo (*Origen*). Después se exrtae le primer camino de la *lista de caminos pendientes* si este no es solución se expande en base a sus *reglas de transición*. Integramos dichas expansiones en nuestro camino y volvemos a iterar. Este algoritmo se repetirá hasta que se encuentre una solución o hasta que no queden caminos por explorar.
Ejemplo de algoritmo Base:
```PYTHON
def search(algorithm, origin, solution):
    # La lista de caminos pendientes se inicia con el estado origen.
    cp = [[origin]]

    # Repetimos el algoritmo mientras haya caminos pendientes.
    while cp:

        # Cogemos el primer camino de la lista de caminos pendientes
        path = cp.pop(0)

        if solution(path):
            # Genial, hemos terminado
            return path
        else:
            # Vaya, seguimos buscando por los sucesores. Expandimos...
            last_state = path[-1]
            e = []
            for state in last_state.successors():
                if state not in path:  # Así evitamos caminos cíclicos
                    expansion = path + [state]
                    e.append(expansion)
            # ... y concatenamos según diga el algoritmo
            cp = algorithm(cp, e)

    # Si hemos salido del bucle, es porque no había ningún camino que
    # llegase al resultado
    return False
```
El parámetro **algorithm** determinará la función con la que se combinará la lista de caminos pendientes con las expansiones.
Los parametros **origin** y **solution** son el estado inicial y el estado que queremos alcanzar.

---

###Algoritmos de Recombinación:

Hemos indicado que el algoritmo concreto de reordenación o recombinación es una función que le pasamos por el parametro **algorithm** Esta función deberá tomar como input un *Lista de caminos pendientes* y una *Lista de Expansiones* y devolver una **nueva** *Lista de caminos pendientes*.

---

###Ejemplos de Algoritmos de Recombinación:
- ####Depth Search:
La búsqueda en profundidad (*Depth Search*) consiste en explorar primero los caminos expandidos para recorrer así el arbol de estados en profundidad.
```PYTHON
def depth_search(cp, e):
    """ Exploración en profundidad.

    :param cp: La lista de caminos pendientes.
    :param e: La lista de caminos expansión.
    """
    return e + cp
```
- ####Breadth Search:
En este caso la búsqueda se realiza por los caminos más cercanos y se va incrementando la profundidad a medida que estos se van explorando.
```PYTHON
def breadth_search(cp, e):
    """ Exploración en amplitud.

    :param cp: La lista de caminos pendientes.
    :param e: La lista de caminos expansión.
    """
    return cp + e
```
- ####Hill Climbing:
El *método de la escalada* es el primero de los algoritmos que vemos que el concepto de heurística, y por tanto el primero que se considera *Inteligencia Artificial*.
Como nuestra función de recombinación espera dos listas de caminos, tenemos que hacer un pequeño truco. Crearemos una función a la que le pasaremos la *heurística*, y esta función devolverá otra función con la **firma** (los parámetro de entrada y salida) que necesitamos.
```PYTHON
def hill_climbing(heuristic):
    """ Método de la escalada.

    :param heuristic: Función que nos da la calidad de un estado en concreto.
    :return: La función de recombinación de caminos pendientes y expansiones.
    """

    def f(cp, e):
        order = lambda path: heuristic(path[-1])
        return sorted(e, key=order) + cp

    return f
```
- ####Best First:
El algoritmo de *primero el mejor* es parfecido al método de la escalada pero en vez de ordenar las expansiones por su heurística y luego concatenarlas a los caminos pendientes ahora se concatenan las expansiones con los caminos pendientes y después se reoredenadn por su eurística.
```PYTHON
def best_first(heuristic):
    """ Método de "Primero el mejor".

    :param heuristic: Función que nos da la calidad de un estado en concreto.
    :return: La función de recombinación de caminos pendientes y expansiones.
    """

    def f(cp, e):
        order = lambda path: heuristic(path[-1])
        return sorted(cp + e, key=order)

    return f
```
