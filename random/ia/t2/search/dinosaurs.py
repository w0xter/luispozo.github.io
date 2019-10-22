from enum import IntEnum

from . import BaseState


class Pj(IntEnum):
    PIRATE = 1,
    TIRANOSAURUS = 2,
    DIPLODOCUS = 3,
    AVOCADO = 4,


class State(BaseState):
    def __init__(self, left_shore, right_shore):
        self.left_shore = set(left_shore)
        self.right_shore = set(right_shore)

    def successors(self):
        """ Calcula todos los posibles estados siguientes a uno dado.

        Sigue las siguientes reglas:

        1. La transición implica que el pirata cambia de orilla.
        2. En la orilla en la que no está el pirata:
            a) No pueden encontrarse el velocirraptor y el diplodocus juntos.
            b) No pueden encontrarse el diplodocus y el aguacate juntos.
        """

        def is_valid(shore):
            if Pj.PIRATE not in shore:
                velocirraptor = Pj.TIRANOSAURUS in shore
                diplodocus = Pj.DIPLODOCUS in shore
                avocado = Pj.AVOCADO in shore

                return not (diplodocus and (velocirraptor or avocado))

        # Origen será la orilla de partida del pirata y dest la orilla destino.
        if Pj.PIRATE in self.left_shore:
            origin, dest = self.left_shore, self.right_shore
        else:
            origin, dest = self.right_shore, self.left_shore

        # Generamos todos los sucesores válidos moviendo los personajes de una
        # orilla a otra. Si el personaje que movemos no es el pirata, le movemos
        # a él también, ya que es parte de las reglas del problema.
        successors = []
        for pj in sorted(origin):
            origin_without_pj = {c for c in origin if c != pj}
            dest_with_pj = dest.union({pj})
            # Si el pj no es el pirata, le movemos también a él.
            if pj != Pj.PIRATE:
                origin_without_pj.remove(Pj.PIRATE)
                dest_with_pj.add(Pj.PIRATE)
            # Si este estado es válido, lo metemos en la lista de sucesores.
            if is_valid(origin_without_pj):
                # Es válido, así que creamos el nuevo estado con las orillas
                # bien ordenadas.
                if Pj.PIRATE in self.left_shore:
                    state = State(origin_without_pj, dest_with_pj)
                else:
                    state = State(dest_with_pj, origin_without_pj)
                # Por último, lo añadimos a la lista de sucesores
                successors.append(state)

        return successors

    def equals(self, other):
        for pj in self.left_shore:
            if pj not in other.left_shore:
                return False
        for pj in self.right_shore:
            if pj not in other.right_shore:
                return False
        return True

    def __str__(self):
        pj_to_value = {
            Pj.PIRATE: 'P',
            Pj.TIRANOSAURUS: 'T',
            Pj.DIPLODOCUS: 'D',
            Pj.AVOCADO: 'A',
        }
        default_value = '_'
        output = []
        for pj, value in pj_to_value.items():
            output.append(value if pj in self.left_shore else default_value)
        output.append(' ')
        for pj, value in pj_to_value.items():
            output.append(value if pj in self.right_shore else default_value)
        return ''.join(output)


def solution(path):
    """ Tener todos los dinosaurios en la orilla derecha. """
    return not path[-1].left_shore
